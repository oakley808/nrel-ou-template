/*!
 *  Author: moakley
 *  Description: Initialize news, icons, and the carousel
 */
'use strict'
/* global jwplayer */
/*
 *  Initialize news
 */
$(document).ready(function(){
    var html = ''

    html += '<li>'
    html += ' <p class="headline"><a href="{{LINK}}">{{HEADLINE}}</a></p>'
    html += ' <p class="date">{{DATE_POSTED}}</p>'
    html += '</li>'

    // Initialize the news headline reader
    $('#news-container').newsy({
        type: 'release,emergency'
      , url: 'http://www.nrel.gov/news/server/cfc/'
      , sitenum: 1 // press
      , results: 3
      , newstmpl: html
    })
})


/*
 *  Toggle Maintenance alert
 */
// $(document).ready( function(){
//     window.setInterval( function(){
//         var date
//           , now
//           , startdate
//           , starttime
//           , expirydate
//           , expirytime
//           , $alert


//         date = new Date()
//         now  = date.getTime()

//         startdate  = new Date("January 8, 2015 00:00:00")
//         starttime  = startdate.getTime()

//         expirydate = new Date("January 12, 2015 00:00:00")
//         expirytime = expirydate.getTime()

//         $alert = $( '#alert' )

//         if( now < starttime || now > expirytime ){
//             $alert.hide()
//         } else {
//             $alert.fadeIn()
//         }

//     }, 1000 )
// })


/*
 *  Label icons
 */
$(document).ready(function(){

    $('body').iconomatic({
        ajax       :  true
      , dataMode   :  true
    })

})

/*
 *  Solr Search IIFE
 ******************/
;(function loadsearch() {
    // don't run this on the solr server
    if ( !location.hostname.match(/search\d?.nrel.gov/) ) {
        var urlString = document.URL.replace('http://', '').replace('https://', '')

        // update ourl for the subsite search if that form exists
        if (document.getElementById('ourl')) {
            document.getElementById('ourl').value = urlString
        }
        // update ourl for banner search if that form exists
        if (document.getElementById('bannerourl')) {
            document.getElementById('bannerourl').value = urlString + '_banner'
        }
    }
}())


/*
 *
 *  Build the showcase
 *  Slots are numbered 0, 1, 2 - Big, top right, then bottom right.
 */
$(document).ready(function () {

    // Cache some DOM elements
    var $showcase = $('.showcase')
      , $primary = $showcase.find('.feature-primary')
      , $secondary = $showcase.find('.feature-secondary')


    var corporateFeatures = [
		{
			id       : 1
		  , modal    : true
		  , useJW    : false
		  , modaldesc: 'This video describes the goals of NREL’s innovation and technology transfer activities, including establishing partnerships that help transfer the laboratory’s scientific discoveries to the marketplace where they can make an impact. <a href="/workingwithus/partnership-opportunities.html">Learn more</a>'
		  , image_url: '/assets/images/20160518_poster-tech-transfer.jpg'
		  , headline : 'Watch Innovation and Technology Transfer at NREL'
		  , embed    : '<iframe width="560" height="315" src="https://www.youtube.com/embed/7nCrkjJ7uVE" frameborder="0" allowfullscreen></iframe>'
		}
        ,
        {
            id        : 2
          , image_url : '/assets/images/hp-feat-30775-@2x.jpg'
          , headline  : 'NREL Distributes Wind Competitiveness Improvement Project Funding'
          , link      : 'http://www.nrel.gov/news/press/2016/26689'
        }
    ]


    /**
     *  Sample code to use for images
     */
    /*
        {
            id        : 1
          , image_url : '/assets/images/hp-feat-30601_@2x.jpg'
          , headline  : 'NREL Seeks Participants for 2016 Energy Execs Program'
          , link      : 'http://www.nrel.gov/news/press/2016/23645'
        }
     */


    /**
     *  Sample code to use for videos
     */
    /*
    SAMPLE JW VIDEO
    {
        id       : 2
      , modal    : true
      , useJW    : true
      , modaldesc: 'This three-minute video highlights the high-performance buildings across NREL\'s campus that incorporate a number of state-of-the art energy efficiency and renewable energy technologies, making them models for sustainability. <a href="/about/sustainability.html">Learn more</a>'
      , image_url: '/assets/images/hp_sustainable_video_@2x.jpg'
      , headline : 'NREL\'s Sustainable Campus'
      , link     : '//youtu.be/XtV574KBEbU'
      , poster   : '/assets/images/hp_sustainable_video_poster.jpg'
      , captions : '/assets/media/20150413_sustainable-campus-hp.vtt'
    }
    SAMPLE EXTERNAL VIDEO
    {
        id       : 2
      , modal    : true
      , useJW    : false
      , modaldesc: 'This three-minute video highlights the high-performance buildings across NREL\'s campus that incorporate a number of state-of-the art energy efficiency and renewable energy technologies, making them models for sustainability. <a href="/about/sustainability.html">Learn more</a>'
      , image_url: '/assets/images/hp_sustainable_video_@2x.jpg'
      , headline : 'NREL\'s Sustainable Campus'
      , embed    : '<iframe frameborder="0" scrollable="no" src="http://www.c-span.org/video/standalone/?c4577470"></iframe>'
    }
    */

    /**
     *  Fallback features for when the CF server goes down.
     */
    var fallbackFeatures = [
        {
            id        : 0
          , image_url : '/assets/images/evergreen-feature-25899-@2x.jpg'
          , headline  : 'NREL Finds Tax Credits Can Impact Renewable Energy Deployment & Electric Sector CO2 Emissions'
          , link      : 'http://www.nrel.gov/news/press/2016/22645'
        }
        ,
        {
            id        : 1
          , image_url : '/assets/images/evergreen-feature-30692-@2x.jpg'
          , headline  : 'NREL is Hiring Full-time Graduate and Undergraduate Students '
          , link      : 'http://www.nrel.gov/careers/interns-post-docs.html'
        }
        ,
        {
            id        : 2
          , image_url : '/assets/images/evergreen-feature-25944-@2x.jpg'
          , headline  : 'Partner with NREL and Create Energy Efficiency Solutions '
          , link      : 'http://www.nrel.gov/workingwithus/partnership-opportunities.html'
        }
    ]

    var url = {
        feed: function(){
            var host
              , maxSlides = 3 // the number of slots in our showcase
              , numFeatures = maxSlides - corporateFeatures.length
              , api = '/news/server/cfc/news.cfc'
              , qs = '?method=get_features_json&count='+numFeatures+'&home_page=1'

            host = location.href.indexOf('dev') > 0
                ? '//www.nrel.gov' //nreldev
                : '//www.nrel.gov'

            // var endpoint =  '//nreldev.nrel.gov/news/server/cfc/news.cfc?method=get_features_json&count='+numFeatures+'&home_page=1'
            // return endpoint
            return host + api + qs
        }
    }

    // http://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal
    /*
     *  Build a modal window
     *
     */
    var buildModal = function( obj ) {

        obj.modaldesc = obj.modaldesc || ''

        var modal = '' +
            '<div class="modal fade" id="myModal'+ obj.id +'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
            '  <div class="modal-dialog modal-lg">' +
            '    <div class="modal-content">' +
            '      <div class="modal-header">' +
            '        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times</span></button>' +
            '        <h4 class="modal-title" id="myModalLabel">'+ obj.headline +'</h4>' +
            '      </div>' +
            '      <div class="modal-body">' +
            '           <div class="embed-responsive embed-responsive-16by9">' +
            '               <div class="embed-responsive-item" id="video'+ obj.id +'" ><i class="fa fa-spinner fa-spin"></i></div>' +
            '           </div>' +
            '      </div>' +
            '      <div class="modal-footer">' +
            '         <p>'+ obj.modaldesc +'</p>'+
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '</div>'

            $('body').append( modal )
    }

    /*
     * helper func to build html
     *  @returns    Object with the main image
     *
     *
     *  <a class="link-tile" href=""{{link}}>
     *      <img src="{{imge_url}}" class="img-responsive" alt="">
     *      <div class="caption">
     *          {{headline}}
     *      </div>
     *  </a>
     *
     */
    var buildSlide = function(slide) {

        slide.link = slide.link || '#video' + slide.id

        var html = ''

        html += '<a class="link-tile" href="'+slide.link+'">'
        html += '    <img src="'+slide.image_url+'" class="img-responsive"  alt="">'
        html += '    <div class="caption">'+slide.headline+'</div>'
        html += '</a>'

        return html
    }


    // get the data
    /***************************/
    var features = $.ajax({
        type : 'GET'
      , dataType : 'json'
      , url : location.search == '?api-fail-test' ? null : url.feed()
    })


    /**
     * Success callback after fetching features data
     * Parse our data and update the UI.
     * @param {Object} jsonarray Array of JSON objects from API
     */
    features.done( function( dynamicFeatures ){


        // add some pathing to our API data
        var allFeatures = dynamicFeatures.map( function(feature){
            feature.headline = feature.HEADLINE
            feature.link = '/news/features/' + feature.YEAR + '/' + feature.NEWS_ID
            feature.image_url = '/assets/images/' + feature.IMAGE_URL

            return feature
        })


        // splice in our static features
        if ( corporateFeatures.length ) {
            corporateFeatures.forEach( function(feature){
                allFeatures.splice( feature.id, 0, feature)
            })
        }


        $primary.append(buildSlide(allFeatures[0]))
        $secondary
            .append(buildSlide(allFeatures[1]))
            .append(buildSlide(allFeatures[2]))


        $showcase.fadeTo(500, 1)

        // Check if there are any modals within the carousel and build them.
        corporateFeatures.map( function( obj ){

            if( obj.hasOwnProperty( 'modal' ) ) {

                buildModal( obj )

                // Set up the modal trigger button
                $showcase.find('.link-tile').eq( obj.id )
                    .attr( 'data-toggle', 'modal' )
                    .attr( 'data-target', '#myModal' + obj.id ).on( 'click', function(evt){
                        evt.preventDefault()
                    })

                if ( obj.useJW === true ) {
                    // Set up JW Player
                    jwplayer( 'video' + obj.id ).setup({
                        file: obj.link
                      , width: '100%'
                      , aspectratio: '16:9'
                      , skin: '/includes/jw6/bekle.xml'
                      , image: obj.poster
                      , tracks: [{
                            file: obj.captions
                          , 'default': false
                        }]
                      , captions: {
                            color: 'ffffff'
                          , fontsize: '12'
                        }
                    })

                } else {
                    // defer appending the video b/c FF bug
                    $( '#myModal'+ obj.id ).on('show.bs.modal', function (e) {
                      $('#video' + obj.id).append( obj.embed )
                    })
                    // some browsers don't kill the video/audio when you hide the modal
                    $( '#myModal'+ obj.id ).on('hidden.bs.modal', function () {
                        $('#video' + obj.id).html('');
                    });
                }


            }
        })
    })



    /* error callback */
    features.fail( function(xhr, msg, detail){ //error: function(xhr, msg, detail) {

        $primary.append(buildSlide(fallbackFeatures[0]))
        $secondary
            .append(buildSlide(fallbackFeatures[1]))
            .append(buildSlide(fallbackFeatures[2]))


        $showcase.fadeTo(500, 1)


        try{
            console.error('There was a problem with the feed: %t', msg)
            console.warn('Details\n' + detail)
        }
        catch(e){
            //For browsers that don't support console.
        }
    })

}) // ready





/*
 *  Crazy Egg
 */
setTimeout(function(){
    var a=document.createElement("script")
    var b=document.getElementsByTagName('script')[0]
    a.src=document.location.protocol+"//dnn506yrbagrg.cloudfront.net/pages/scripts/0011/5883.js?"+Math.floor(new Date().getTime()/3600000)
    a.async=true
    a.type="text/javascript"
    b.parentNode.insertBefore(a,b)
}, 1)
