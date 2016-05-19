/*!
 *  Project: Newsy
 *  Description: Pull news and events JSON data from the NREL N/E db. Provides basic templating on the front-end.
 *  Author: Michael Oakley
 *  License: MIT
 */

'use strict';
/* jshint unused: vars */

;(function ( N, R, E, L ) {

        // Create the defaults
        var pluginName = "newsy",
              defaults = {
              url: '/news/server/cfc/'
            , api: 'news.cfc'
            , type      : 'news' // release, news, events, feature, custom
            , newsfunc  : 'getNewsHeadlines'
            , releasefunc: 'getNewsHeadlines'
            , featurefunc: 'getNewsHeadlines'
            , eventsfunc: 'getEventsHeadlines'
            , sitenum   : 1
            , results   : 2
            , spinner   : '<i class="fa fa-spinner fa-spin"></i>'
            , releasetmpl  : '<p class="headline"><a href="{{LINK}}">{{HEADLINE}}</a></p>' +
                          '<p class="date">{{DATE_POSTED}}</p>'
            , newstmpl  : '<p class="headline"><a href="{{LINK}}">{{HEADLINE}}</a></p>' +
                          '<p class="date">{{DATE_POSTED}}</p>'
            , eventstmpl: '<div class="event">' +
                          ' <p class="headline"><a href="{{eventlink}}">{{title}}</a></p>' +
                          ' <p class="date">{{pretty_date_start}}</p>' +
                          ' <p class="location">{{city}}, {{state}}</p>' +
                          '</div>'
            , featuretmpl:''
            , customfunc: ''
            , customtmpl: ''
        };

        // The actual plugin constructor
        function Plugin( element, options ) {
            this.element   = element;
            this.settings  = N.extend( {}, defaults, options );
            this._defaults = defaults;
            this._name     = pluginName;
            this.init();
        }

        // Avoid Plugin.prototype conflicts
        N.extend(Plugin.prototype, {
            init: function () {
                var self = this
                  , spinnerId = this._name + '-spinner'
                  , def  = N.Deferred()
                  , tmpl = this.settings[this.settings.type + 'tmpl'] || this.settings.newstmpl;

                // Weeee....
                this.showSpinner( this.settings.spinner, spinnerId );

                // Get our data from the API
                def = this.getData();

                // Build our interface
                def.done( function(result, status, jqxhr){
                    self.hideSpinner(spinnerId);
                    self.updateUI.call( self, result, status, jqxhr, tmpl );
                });

                def.fail( function(error, msg){
                    self.hideSpinner(spinnerId);
                    self.updateUI.call( self, error, msg );
                })
            },

            showSpinner: function(spinner, id) {
                N('<div>', {id: id })
                    .append(spinner)
                    .appendTo(this.element);
            },

            hideSpinner: function(id) {
                N('#'+id).remove();
            },

            /*
             *  Make an async call to our API to get data
             *  returns a function that returns a chainable jqxhr object
             */
            getData: function () {

                var opts = this.settings
                , method = opts[opts.type + 'func'] || opts.newsfunc;

                return N.ajax({
                    type: 'GET'
                  , dataType: 'json'
                  , url: opts.url + opts.api
                  , data: {
                        method:   method
                      , type:     opts.type
                      , siteID:   opts.sitenum
                      , numItems: opts.results
                    }
                });
            },


            /*
             *  Update our UI by iterating through the results and
             *      replacing the tokens in our template with the property values in our data object
             */
            updateUI: function( result, status, jqxhr, template ) {
                var re
                  , str
                  , tmpl
                  , Nel  = N(this.element)
                  , opts = this.settings
                  , plural;

                if ( status === "error" ) {
                    console.error('Newsy API failed to retrieve data')
                    Nel.append('<p>No current news.</p>');
                    return;
                }

                if (!result.length) {
                    plural = opts.type.slice(-1) === 's' ? '' : 's';

                    Nel.append('<p>No current news</p>');
                    return;
                }

                N.each( result, function(i,obj){
                    tmpl = template;
                    for( var prop in obj ) {
                        str = '{{' + prop + '}}';
                        re  = new RegExp(str,'gi');

                        tmpl = tmpl.replace( re, obj[prop] );
                    }
                    Nel.append(tmpl);
                });

            }
        });

        // A really lightweight plugin wrapper around the constructor,
        // preventing against multiple instantiations
        N.fn[ pluginName ] = function ( options ) {
            this.each(function() {
                if ( !N.data( this, "plugin_" + pluginName ) ) {
                      N.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
                }
            });

            // chain jQuery functions
            return this;
        };



})( jQuery, window, document );
