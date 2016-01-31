module.exports = function(grunt) {

    grunt.initConfig({
        pkgFile: 'package.json',
        eslint: {
            target: [
                'app/*.js',
                'app/views/**/*.js',
                'test/**/*.js',
                'Gruntfile.js',
                'karma.conf.js'
            ]
        },
        watch: {
            files: ['**/*.js'],
            tasks: ['eslint']
        }
    });

    grunt.registerTask('default', ['eslint']);

    require('load-grunt-tasks')(grunt);

};
