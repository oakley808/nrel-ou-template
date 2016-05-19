'use strict';

/*
 *  moakley
 *  Set site-level variables (required)
 */
 $(document).ready( function(){

    window.nrel = $.extend({}, window.nrel); // Merge in page level variables if they are set
    window.nrel.pagevars = $.extend({}, window.nrel.pagevars); // (in case window.nrel isn't defined)

    window.nrel.pagevars.sitename = 'H2Fast';
    //window.nrel.pagevars.topnav   = 'H2Fast';

    /*
     * Contact Us footer link
     * if the site doesn't defer to the globalwebmaster, use the local one
     **************************/
    if( !pv.globalwebmaster && pv.sitename ) {
        $('#contact-link').attr( 'href', pv.siteurl + 'contacts.html' );
    } else {
        $('#contact-link').attr( 'href', '/webmaster.html' );
    }

});
