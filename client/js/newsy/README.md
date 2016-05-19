Newsy
==========

A client-side application to handle data from the NREL News and Events db. 

## Quick Setup

Include the script.

```html
<script src="/client/js/newsy/jquery.newsy.min.js"></script>
```

Add a container for the results

```html
<div id="my-news-div"></div>
```

Initialize the plugin.

```javascript
$(document).ready( function(){
    $('#my-news-div').newsy({
        type: 'news'
      , sitenum: 1 
      , results: 2  
    });
});
```


## Options
```
* url        // url to the web service
* api        // the API
* type       // news | events
* newsfunc   // function to call for news
* eventsfunc // function to call for events
* sitenum    // the site number in the N/E database
* results    // the maximum number of results you want
* spinner    // HTML for your ajax loader
* newstmpl   // tokenized html for your news results
* eventstmpl // tokenized html for your events results
* customfunc // a custom function to call if type is not news or events
* customtmpl // tokenized html for your custom results
```

## Defaults
```javascript
var defaults = {
      url       : 'https://apps1.nrel.gov/news/nrel_news_admin/'
    , api       : 'cmp_remote_lookup.cfc'
    , type      : 'news'
    , newsfunc  : 'getNewsHeadlines'
    , eventsfunc: 'getEventsHeadlines'
    , sitenum   : 1
    , results   : 2
    , spinner   : '<i class="fa fa-spinner fa-spin"></i>'
    , newstmpl  : '<p class="headline"><a href="{{LINK}}">{{HEADLINE}}</a></p>' +
                  '<p class="date">{{DATE_POSTED}}</p>'
    , eventstmpl: '<div class="event">' +
                  ' <p class="headline"><a href="{{eventlink}}">{{title}}</a></p>' +
                  ' <p class="date">{{date_start}}</p>' +
                  ' <p class="location">{{city}}, {{state}}</p>' +
                  '</div>'
    , customfunc: ''
    , customtmpl: ''
};
```

## Notes
Todo.
* document tokens
* Font Awesome is used in default spinner
* 

## Dependencies
jQuery (Tested with 1.7 and 1.11)

## DEV Dependencies
grunt (and Node)
grunt-contrib-uglify
