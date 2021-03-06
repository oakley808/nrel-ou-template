/*!
 *
 *  moakley
 *  Initialize Newsroom scripts
 *
 */

'use strict';

/*
 *
 *  Set site-level variables (required)
 *  The Newsroom site merged with the About NREL site, but still lives in its own sibling /news/ directory.
 *  We deal with that here in the application page vars.
 */
 $(document).ready( function(){
    window.nrel = $.extend({}, window.nrel); // Merge in page level variables if they are set
    window.nrel.pagevars = $.extend({}, window.nrel.pagevars); // (in case window.nrel isn't defined)

    window.nrel.pagevars.sitename = 'About NREL';
    window.nrel.pagevars.siteurl  = '/about/';
    window.nrel.pagevars.topnav   = 'about';
});

/*
 *
 * Init the news/events plugin
 *
 */
$(document).ready(function(){

    $('#releases-container').newsy({
        type: 'release'
      , url: 'http://www.nrel.gov/news/server/cfc/'
      , sitenum: 1
      , results: 3
      , newstmpl  : '<div class="item"><p class="headline"><a href="{{LINK}}">{{HEADLINE}}</a></p><p><b>{{DATE_POSTED}}</b></p></div>'
    });


    $('#features-container').newsy({
        type: 'feature'
      , url: 'http://www.nrel.gov/news/server/cfc/'        
      , results: 3
      , featuretmpl: '<div class="row"><div class="item"><div class="col-sm-4"><img src="{{IMAGE_URL}}" class="img-responsive"></div><div class="col-sm-8"><p class="headline"><a href="{{LINK}}">{{HEADLINE}}</a></p><p><b>{{DATE_POSTED}}</b></p></div></div></div>'
    });
});
