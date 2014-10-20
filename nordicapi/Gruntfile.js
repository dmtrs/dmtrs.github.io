module.exports = function(grunt) {
    //  Project configuration.
    grunt.initConfig({
        watch: {
          scss: {
              files: ['**/*.scss'],
              tasks: ['sass'],
              options: {
                spawn: false
              }
          }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: './css',
                    ext: '.css'
                }]
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};
