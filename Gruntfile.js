module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['css/bootstrap.css','style.css','onepage.css','css/dark.css','css/font-icons.css','css/et-line.css','css/animate.css','css/magnific-popup.css','css/fonts.css','css/responsive.css'],
          dest: 'dist/css/built.css',
        },
      },
  });


  grunt.loadNpmTasks('grunt-contrib-concat');


};