/*
 *  moakley
 *  Set site-level variables (required)
 */
 'use strict';
 $(document).ready( function(){

    window.nrel = $.extend({}, window.nrel); // Merge in page level variables if they are set
    window.nrel.pagevars = $.extend({}, window.nrel.pagevars); // (in case window.nrel isn't defined)

    window.nrel.pagevars.sitename = 'Research Site Name';
});


/*
 *  moakley
 *  Set up news and/or events
 */
$(document).ready(function(){

    // var env
    //   , prod
    //   , dev;
    //
    // prod = {
    //     sitenum : 123 // Research Site Name prod
    // };
    //
    // dev = {
    //     sitenum : 123 // Research Site Name dev
    // };
    //
    // // Context/environment switching... ...or just use prod.
    // // location.hostname.match('nreldev') ? env = $.extend({}, dev) : env = $.extend({}, prod)
    // env = prod;
    //
    // $('#news-container').newsy({
    //     type      : 'news'
    //   , sitenum   : env.sitenum
    //   , results   : 2
    // });


});
