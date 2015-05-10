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
    watch: {
        files: ['css/bootstrap.css','style.css','onepage.css','css/dark.css','css/et-line.css','css/animate.css','css/magnific-popup.css','css/fonts.css','css/responsive.css'],
        tasks: 'concat',

    }

  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');


};