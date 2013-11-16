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
		    		paths: ["assets/stylesheets/less"],
                    compress: true
		    	},
		    	files: {
		    		"assets/stylesheets/css/main.css": "assets/stylesheets/less/main.less"
		    	}
			}
		},
		watch: {
            files: ["**/*.html", "**/*.md", "**/*.less"],
            tasks: ["less", "jekyll"]
        }
	});

    grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
};

