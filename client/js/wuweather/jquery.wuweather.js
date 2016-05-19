/*!
*  Project: WU Widget
*  Description: Just a little weather widget that uses the WeatherUnderground API
*  Author: Michael Oakley
*  License: MIT
*/
;(function ( $, window, document, undefined ) {

        // defaults
        var pluginName = "wuwidget",
            defaults   = {
                city    : 'Denver',
                state   : 'CO',
                unit    : 'F',
                apikey  : '',
                url     : 'http://api.wunderground.com/api/',
                path    : '/geolookup/conditions/q/',
                iconset : 'k'
            };

        // constructor
        function Wuwidget( element, options ) {
                this.element = element;
                this.settings = $.extend( {}, defaults, options );
                this._defaults = defaults;
                this._name = pluginName;
                this.init();
        }

        $.extend(Wuwidget.prototype, {
                init: function () {

                    var url = this.settings.url +
                              this.settings.apikey +
                              this.settings.path +
                              this.settings.state + '/' +
                              this.settings.city + '.json';

                    this.fetchData(url);

                    //this.buildHTML(results);
                },

                fetchData: function (url) {
                    var self = this,
                        $el = $(self.element);

                    var def = $.ajax({
                          url: url
                        , dataType : "jsonp"
                    });

                    def.done( function( data ){

                        var date  = data.current_observation.observation_time,
                            city  = data['location']['city'],
                            state = data.location.state,
                            wx    = data.current_observation.weather,
                            iUrl  = 'http://icons.wxug.com/i/c/' + self.settings.iconset + '/',
                            iExt  = '.gif',
                            iImg  = data.current_observation.icon,
                            temp;

                        if( self.settings.unit == 'F' ) {
                            temp  = data.current_observation.temp_f;
                        } else {
                            temp  = data.current_observation.temp_c;
                        }

                        // todo: split out into build function

                        $('<h3>',{class:'wx-loc'})
                            .appendTo( self.element )
                            .html('Current Conditions for<br>' + city + ', ' + state );

                        $('<p>',{class:'wx-date'})
                            .appendTo( self.element )
                            .text(date);

                        $('<h2>', {class: 'wx-temp col-sm-6'})
                            .appendTo( self.element )
                            .text(temp);

                        $('<span>', {class: 'wx-unit'})
                            .appendTo('.wx-temp')
                            .html('&deg;' + self.settings.unit );

                        $('<div>', {class: 'wx-icon col-sm-6'})
                            .appendTo( self.element );

                        $('<img />', {src: iUrl + iImg + iExt })
                            .appendTo('.wx-icon');

                        $('<h3>', {class: 'wx-cond'})
                            .appendTo('.wx-icon')
                            .text(wx);

                    });

                    def.fail( function(){
                        $(self.element).append('<p>Check back later for weather updates.</p>')
                    })
                }
        });

        // A really lightweight plugin wrapper around the constructor,
        // preventing against multiple instantiations
        $.fn[ pluginName ] = function ( options ) {
                this.each(function() {
                        if ( !$.data( this, "plugin_" + pluginName ) ) {
                            $.data( this, "plugin_" + pluginName, new Wuwidget( this, options ) );
                        }
                });

                // chain jQuery functions
                return this;
        };

})( jQuery, window, document );
