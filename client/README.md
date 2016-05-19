nrel-template
=============

Global files for the NREL.gov responsive template


This repo contains all the files located in the NREL.gov root client folder. (template HTML, JS, CSS files and some plugins)


Run ```npm install``` to install the node modules used by grunt.


## How to update the home page carousel
Example JSON configuration for a static feature, a JW video feature, and a YouTube embedded feature.

```javascript
    var corporateFeatures = [
        {
            id        : 0
          , image_url : '/assets/images/20160223-25899-feat_hp_@2x.jpg'
          , headline  : 'NREL Finds Tax Credits Can Impact Renewable Energy Deployment & Electric Sector CO2 Emissions'
          , link      : 'http://www.nrel.gov/news/press/2016/22645'
        }
        ,
        {
            id       : 1
          , modal    : true
          , useJW    : true
          , modaldesc: 'This three-minute video highlights the high-performance buildings across NREL\'s campus that incorporate a number of state-of-the art energy efficiency and renewable energy technologies, making them models for sustainability. <a href="/about/sustainability.html">Learn more</a>'
          , image_url: '/assets/images/hp_sustainable_video_@2x.jpg'
          , headline : 'NREL\'s Sustainable Campus'
          , link     : '//youtu.be/XtV574KBEbU'
          , poster   : '/assets/images/hp_sustainable_video_poster.jpg'
          , captions : '/assets/media/20150413_sustainable-campus-hp.vtt'
        }
        ,
        {
            id       : 2
          , modal    : true
          , useJW    : false
          , modaldesc: 'This three-minute video highlights the high-performance buildings across NREL\'s campus that incorporate a number of state-of-the art energy efficiency and renewable energy technologies, making them models for sustainability. <a href="/about/sustainability.html">Learn more</a>'
          , image_url: '/assets/images/hp_sustainable_video_@2x.jpg'
          , headline : 'NREL\'s Sustainable Campus'
          , embed    : '<iframe frameborder="0" scrollable="no" src="http://www.c-span.org/video/standalone/?c4577470"></iframe>'
        }
    ]

```

## How to build the template
Run this from the ~/Sites/NREL.gov/client/ root directory:

 ```
 grunt build --site=[hp | global | application | about | careers |...]
 ```

To see a list of tasks, run:

 ```grunt --help```

You can even run subtasks to build just the files you need for the sites you need.

To build only the global CSS files:

```
grunt --build:css --site=global
```

To build the JS files for Bioenergy:

```
grunt --build:js --site=bioenergy
```

## How to update the NREL template repo when its submodules are updated
If a submodule (e.g. iconomatic, newsy, wuweather) has been updated in its native repo, then you can pull those changes into this repo with this command:

```
cd /path/to/local/clientfolder
git submodule foreach git pull origin master
```

Then you can git ```add``` ```commit``` and ```push``` those updates.
