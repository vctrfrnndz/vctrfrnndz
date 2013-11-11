module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
		    	options: {
		    		paths: ["assets/stylesheets/less"]
		    	},
		    	files: {
		    		"assets/stylesheets/css/main.css": "assets/stylesheets/less/main.less"
		    	}
			}
		},
		watch: {
            files: "assets/stylesheets/less/*",
            tasks: ["less"]
        }
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
};

