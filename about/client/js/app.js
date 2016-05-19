/*!
 *
 *  moakley
 *  Initialize About NREL scripts
 *
 */

'use strict';

/*
 *
 *  Set site-level variables (required)
 *
 */
 $(document).ready( function(){

    window.nrel = $.extend({}, window.nrel); // Merge in page level variables if they are set
    window.nrel.pagevars = $.extend({}, window.nrel.pagevars); // (in case window.nrel isn't defined)

    window.nrel.pagevars.sitename = 'About NREL';
    window.nrel.pagevars.topnav   = 'about';
    window.nrel.pagevars.siteurl   = '/about/';

});

/*
 *
 * Init the news/events plugin
 *
 */
$(document).ready(function(){


    /*
     *   news listing page
     *   allow the front end developer to set a data attr to override
     */
    $('#awards-news-listing').newsy({
        type    : 'news'
      , sitenum : $('#awards-news-listing').data('sitenum') || 20 // awards
      , results : $('#awards-news-listing').data('results') || 2
    })

    $('#awards-news-container').newsy({
        type: 'news'
      , sitenum: 20
      , results: 2
    })

    $('#news-container').newsy({
        type: 'news'
      , sitenum: 33 // community
      , results: 2
    })


    // var eventHtml = ''+
    //     '<p class="date">{{pretty_date_start}}</p>' +
    //     '<p class="event">{{title}}</p>' +
    //     '<p class="location">{{city}}, {{state}}<br>' +
    //     '<a href="{{contact_email}}">{{contact_email}}</a></p>' +
    //     '<p class="ics"><span class="addtocalendar atc-style-menu-wb">' +
    //     '    <a class="atcb-link fa fa-plus"> Add to Calendar</a>' +
    //     '    <var class="atc_event">' +
    //     '        <var class="atc_date_start">{{date_start}}</var>' +
    //     '        <var class="atc_date_end">{{date_end}}</var>' +
    //     '        <var class="atc_timezone">{{time_zone}}</var>' +
    //     '        <var class="atc_title">{{title}}</var>' +
    //     '        <var class="atc_location">{{city}}, {{state}}</var>' +
    //     '    </var>' +
    //     '    </span>' +
    //     '</p>';


    $('#events-container').newsy({
        type: 'events'
      , sitenum: 33 // communitydev=1030
      , results: 2
        //,eventstmpl: eventHtml
    })
})


/*
 *  Scroll to the top of BS accordions when they open
 */
$(document).ready( function(){

    $('.accordion').on( 'shown.bs.collapse', function () {

      var panel = $(this).find('.in');

      $('html, body').animate({
            scrollTop: panel.offset().top - 50
      }, 1000);

    });

})



/*
 *  innovation impact
 *  trigger accordion open
 */
$(document).ready(function(){

    var $panel;

    if (location.hash.length) {

        $panel = $('a[href='+location.hash+']');

        $('#accordion').on('shown.bs.collapse', function (evt) {
            console.log('on', evt)
            // var top = 0
            //   , def;

            // if( $panel.offset() !== undefined ) { // default is to scroll to the top
            //     top = $panel.offset().top;
            //     console.log(top)
            // }

            // // scroll! (use a promise instead of complete() callback so that the cb doesn't fire twice -- for html and body)
            // def = $( 'html, body' ).animate({
            //     scrollTop:  top
            // }, '2000').promise();

            // // set keyboard focus for accessibility
            // def.done( function(){
            //     $panel.focus();
            // });
        });

        console.log('showing')
        $( location.hash ).collapse('show');
    }
});
