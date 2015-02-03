module.exports = function(grunt) {
    grunt.initConfig({
        jekyll: {
            target: {
                options: {
                    config: '_config.yml'
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ['assets/stylesheets/less'],
                    compress: true
                },
                files: {
                    'assets/stylesheets/css/main.css': 'assets/stylesheets/less/main.less'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    {
                        expand: true, 
                        cwd: 'public/',
                        src: ['**/*.html'],
                        dest: 'public/',
                    }
                ]
            }
        },
        uglify: {
            development: {
                files: {
                    'assets/js/main.min.js': ['assets/js/main.js']
                }
            }
        },
        watch: {
            less: {
                files: ['assets/stylesheets/less/*.less'],
                tasks: ['less', 'jekyll']
            },
            text: {
                files: ['_includes/*.html', '_layouts/*.html', '_posts/*.md', './*.md', './*.html', '_config.yml'],
                tasks: ['jekyll']
            },
            js: {
                files: ['assets/js/main.js'],
                tasks: ['uglify', 'jekyll']
            },

        }
    });

    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'uglify', 'jekyll', 'htmlmin']);
};
