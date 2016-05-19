/*!
 *  Author: moakley
 *  Description: Create targets dynamically from the command line, and add in the global/hp/app targets
 *
 *  Run this from the /client/ root directory:
 *   grunt build --site=[hp | global | application | about | careers |...]
 *
 *  You can also do subtasks for JS or CSS like:
 *   grunt build:js --site=somesite
 *
 *  To see a list of tasks, run:
 *   grunt --help
 */

module.exports = function(grunt) {


    var mtarget = {}    // minify
      , utarget = {}    // uglify
      , ctarget = {}    // concat
      , path    = grunt.option('site');


    // Build a target based off of what the user specified on the command line
    [path].forEach( function(p) {
        utarget[p] = {
            options: {
                banner: '/*! '+p+' site scripts <%= grunt.template.today() %> */\n'
              , compress: {}
              , preserveComments: 'some' // preserves if it has an bang ! eg /*!
              , mangle: true
              , sourceMap: true
            }
          , src:  '../'+p+'/client/js/app.js'
          , dest: '../'+p+'/client/js/app.min.js'
        };

        mtarget[p] = {
            options: {
                banner: '/*! '+p+' site styles <%= grunt.template.today() %> */\n'
              , keepSpecialComments: '*'
            }
          , src:  '../'+p+'/client/css/styles.css'
          , dest: '../'+p+'/client/css/styles.min.css'
        };
    });


    /*
     *
     *  Add the home page target
     *
     */
    // uglify
    utarget['hp'] = {
        options: {
            banner: '/*! Global home page scripts <%= grunt.template.today() %> */\n'
          , compress: {}
          , preserveComments: 'some' // preserves if it has an bang ! eg /*!
          , mangle: true
          , sourceMap: true
        },
        files: {
            'js/hp.app.min.js': ['js/hp.app.js']
        }
    };
    // minify css
    mtarget['hp'] = {
        options: {
            banner: '/*! Global home page styles <%= grunt.template.today() %> */\n'
          , keepSpecialComments: '*'
          // , shorthandCompacting: false // this is in css-clean v3, we have v2 within cssmin
          // , aggressiveMerging: false // this is in css-clean v3, we have v2 within cssmin

        },
        files: {
            'css/hp.min.css': ['css/hp.css']
        }
    };


    /*
     *
     *  Add the global target
     *
     */
    // uglify
    utarget['global'] = {
        options: {
            banner: '/*! Global NREL site scripts <%= grunt.template.today() %> */\n'
          , compress: {}
          , preserveComments: 'some' // preserves if it has an bang ! eg /*!
          , mangle: true
          , sourceMap: true
        },
        files: {
            'js/app.min.js': ['js/app.js']
        }
    };
    // minify css
    mtarget['global'] = {
        options: {
            //banner: '/*! Global styles <%= grunt.template.today() %> */\n',
            keepSpecialComments: '*'
          , keepBreaks: true
          , noAdvanced: true
        },
        files: {
            'css/nrel.complete.min.css': ['css/nrel.complete.css']
        }
    };
    // concat css
    ctarget['global'] = {
        options: {
            banner: '/*! Global styles <%= grunt.template.today() %> */\n'
          , separator: '\n'
        },
        files: {
            'css/nrel.complete.css': [
                'css/nrel.main.css'
              , 'css/nrel.topnav.css'
              , 'css/nrel.banner.css'
              , 'css/nrel.footer.css'
              , 'css/nrel.search.css'
            ]
        }
    };


    /*
     *
     *  Add the application target
     *
     */
    // minify css
    mtarget['application'] = {
        options: {
            banner: '/*! Global NREL Application styles <%= grunt.template.today() %> */\n'
          , keepSpecialComments: '*'
          // , shorthandCompacting: false // this is in css-clean v3, we have v2 within cssmin
          // , aggressiveMerging: false // this is in css-clean v3, we have v2 within cssmin

        },
        files: {
            'css/nrel.application.min.css': ['css/nrel.application.css']
        }
    };



    /*
     *
     *  Configure targets
     *
     */
    grunt.initConfig({
        uglify: utarget
      , cssmin: mtarget
      , concat: ctarget
    });


    /*
     *
     *  Load modules
     *
     */
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    /*
     *
     *  Register tasks
     *
     */
    if( path === 'global' ) {

        grunt.registerTask( 'build', ['uglify:'+path, 'concat:'+path, 'cssmin:'+path]);
        grunt.registerTask( 'build:css', ['concat:'+path, 'cssmin:'+path]);
        grunt.registerTask( 'build:js', ['uglify:'+path]);

    } else if ( path === 'application' ) {

        grunt.registerTask( 'build', ['cssmin:'+path]);

    } else { // home page, bioenergy, careers, etc

        grunt.registerTask( 'build:js', [ 'uglify:'+path ]);
        grunt.registerTask( 'build:css', [ 'cssmin:'+path]);
        grunt.registerTask( 'build', ['uglify:'+path, 'cssmin:'+path]);

    }

};
