'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Copy web assets from bower_components to more convenient directories.
    copy: {
        main: {
            files: [
                // Vendor scripts.
                {
                    expand: true,
                    cwd: 'bower_components/bootstrap-sass/assets/javascripts/',
                    src: ['**/*.js'],
                    dest: 'js/src/bootstrap-sass/'
                },
                {
                    expand: true,
                    cwd: 'bower_components/jquery/dist/',
                    src: ['**/*.js', '**/*.map'],
                    dest: 'js/src/jquery/'
                },

                // Fonts.
                {
                    expand: true,
                    filter: 'isFile',
                    flatten: true,
                    cwd: 'bower_components/',
                    src: ['bootstrap-sass/assets/fonts/**'],
                    dest: 'fonts/'
                },

                // Stylesheets
                {
                    expand: true,
                    cwd: 'bower_components/bootstrap-sass/assets/stylesheets/',
                    src: ['**/*.scss'],
                    dest: 'sass/'
                },
                {
                    expand: true,
                    cwd: 'bower_components/animate-sass/',
                    src: ['**/*.scss'],
                    dest: 'sass/'
                }
            ]
        },
    },

    // Watch for changes and trigger compass, jshint, uglify and livereload
    watch: {
      compass: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['compass:dev']
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['jshint', 'uglify:dev']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '*.html',
          'css/style.css',
          'js/*.js',
          'images/{,**/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // Connect
    /*connect: {
      server: {
        options: {
          port: 8000
        }
      }
    },*/

    // Compass and scss
    compass: {
      options: {
        //bundleExec: true,
        httpPath: './',
        cssDir: 'css',
        sassDir: 'sass',
        imagesDir: 'images',
        javascriptsDir: 'js',
        fontsDir: 'fonts',
        assetCacheBuster: 'none',
        // require: [
        //   'sass-globbing'
        // ]
      },
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'expanded',
          relativeAssets: true,
          sourcemap: true
        }
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compact',
          relativeAssets: true,
          force: true
        }
      }
    },
 
    // Javascript linting with jshint
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'js/src/*.js'
      ]
    },

    // Concat & minify
    uglify: {
      dev: {
        options: {
          mangle: false,
          compress: false,
          preserveComments: 'all',
          beautify: true
        },
        files: {
          'js/app.min.js': [            
            'js/src/jquery/jquery.js',
            'js/src/bootstrap-sass/bootstrap.js',
            'js/src/*.js'
          ]
        }
      },
      dist: {
        options: {
          mangle: true,
          compress: true
        },
        files: {
          'js/app.min.js': [
            'js/src/*.js',
            'js/src/jquery/jquery.js',
            'js/src/bootstrap-sass/bootstrap.js'            
          ]
        }
      }
    },

  });

  //grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', [
    'copy',
    'jshint',
    'uglify:dist',
    'compass:dist'
  ]);

  grunt.registerTask('default', [
    'copy',
    //'connect',
    'jshint',
    'uglify:dev',
    'compass:dev',
    'watch'
  ]);

};