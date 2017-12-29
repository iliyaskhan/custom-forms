module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.initConfig({

		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'nested',
				sourceComments: false
			},
			dist: {
				files: {
					'assets/css/github.css': 'assets/sass/github.scss',
					'assets/css/front.css': 'assets/sass/front.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 version', '> 1%', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
			},
			dist: {
				files: {
					'assets/css/github.css': 'assets/css/github.css',
					'assets/css/front.css': 'assets/css/front.css'
				}
			}
		},

		cssmin: {
			options: {
				sourceMap: true
			},
			target: {
				files: {
					'assets/css/github.css': ['assets/css/github.css'],
					'assets/css/front.css': ['assets/css/front.css']
				}
			}
		},

		watch: {
			sass: {
				files: ['**/*.scss'],
				tasks: ['sass', 'autoprefixer', 'cssmin'],
				options: {
					spawn: false
				}
			}
		},

	});

	grunt.registerTask( 'default', ['watch'] );

};
