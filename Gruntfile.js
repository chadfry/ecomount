module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['css/bootstrap.css','style.css','onepage.css','css/dark.css','css/et-line.css','css/animate.css','css/magnific-popup.css','css/fonts.css','css/responsive.css'],
          dest: 'dist/css/built.css',
        },
      },
    
    cssmin: {
      compress: {
        files: {
          'dist/css/style.min.css': 'dist/css/built.css'
        },
      },
    },
    htmlmin: {                                     // Task 
        dist: {                                      // Target 
          options: {                                 // Target options 
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files 
            'home.min.html': 'home.html'    // 'destination': 'source' 
          },
        },
      },
      uglify: {
          my_target: {
            files: {
              'dist/js/output.min.js': ['js/jquery.js', 'js/plugins.js'],
              'dist/js/functions.min.js': 'js/functions.js'
            },
          },
        },

    watch: {
        files: ['css/bootstrap.css','style.css','onepage.css','css/dark.css','css/et-line.css','css/animate.css','css/magnific-popup.css','css/fonts.css','css/responsive.css','home.html'],
        tasks: ['concat', 'cssmin', 'htmlmin','uglify']

    }

  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');


};