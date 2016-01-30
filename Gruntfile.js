module.exports = function(grunt) {

	grunt.initConfig({
		pkgFile: 'package.json',
		eslint: {
			target: [
				'lib/**/*.js',
				'app/**/*.js',
				'test/**/*.js',
				'Gruntfile.js'
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