module.exports = function(grunt) {

    // Author: moakley

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                ,compress: false
                // ,compress: {
                //     drop_console: false // does this work?
                // }
                ,sourceMap: true
                ,preserveComments: 'some' // preserves if it has an bang ! eg /*!
                ,mangle: {
                    except: ['N', 'R', 'E', 'L'] // leave these variable names alone ;-)
                }
            },
            dist: {
                src:  'jquery.<%= pkg.name %>.js',
                dest: 'jquery.<%= pkg.name %>.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', [ 'uglify' ]);

};
