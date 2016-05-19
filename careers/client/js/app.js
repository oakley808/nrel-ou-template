'use strict';

/*
 *  moakley
 *  Set site-level variables (required)
 */
 $(document).ready( function(){

    window.nrel = $.extend({}, window.nrel); // Merge in page level variables if they are set
    window.nrel.pagevars = $.extend({}, window.nrel.pagevars); // (in case window.nrel isn't defined)

    window.nrel.pagevars.sitename = 'Careers';
    // window.nrel.pagevars.topnav   = 'careers';
});

/*
 *  moakley
 *  Set up events
 *
 */
$(document).ready(function(){

    var eventHtml = ''+
        '<p class="date">{{pretty_date_start}}</p>' +
        '<p class="event">{{title}}</p>' +
        '<p class="location">{{city}}, {{state}}<br>' +
        '<a href="{{contact_email}}">{{contact_email}}</a></p>' +
        '<p class="ics"><span class="addtocalendar atc-style-menu-wb">' +
        '    <a class="atcb-link fa fa-plus"> Add to Calendar</a>' +
        '    <var class="atc_event">' +
        '        <var class="atc_date_start">{{date_start}} {{time_start}}</var>' +
        '        <var class="atc_date_end">{{date_end}} {{time_end}}</var>' +
        '        <var class="atc_timezone">{{time_zone}}</var>' +
        '        <var class="atc_title">{{title}}</var>' +
        '        <var class="atc_location">{{city}}, {{state}}</var>' +
        '    </var>' +
        '    </span>' +
        '</p>';


    var env
      , prod
      , dev;

    prod = {
      // url: ,
      sitenum : 1033 // careers prod
    };

    dev = {
      // url: ,
      sitenum : 2030 // careers dev
    };

    // Context/environment switching...
    location.hostname.match('nreldev') ? env = $.extend({}, dev) : env = $.extend({}, prod)

    // Just use prod...
    env = prod;

    $('#events-container').newsy({
        type      : 'events'
      , sitenum   : env.sitenum
      , results   : 4
      , eventstmpl: eventHtml
    });
});



/*
 *  moakley
 *  Smooth Scroll
 */
$(document).ready( function(){

    $( '.backtotop, .smoothscroll' ).on( 'click', function(event){

        var target = $( event.delegateTarget ).attr('href');
        var top = 0;

        if( $(target).offset() !== undefined ) { // default is to scroll to the top
            top = $(target).offset().top;
        }

        // scroll! (use a promise instead of complete() callback so that the cb doesn't fire twice -- for html and body)
        var def = $( 'html, body' ).animate({
            scrollTop:  top
        }, 'slow').promise();

        // set keyboard focus for accessibility
        def.done( function(){
            $(target).focus();
        });

        return false;
    });

});
