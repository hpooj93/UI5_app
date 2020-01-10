module.exports = function (grunt) {
	"use strict";
	grunt.initConfig({

		test: {
			all: ['/webapp/test/unit/unitTests.qunit.html']
        }
		});
                grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
				grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-test");
//				grunt.loadNpmTasks('grunt-contrib-connect');
//				grunt.loadNpmTasks('grunt-contrib-qunit');
//				grunt.loadNpmTasks('grunt-karma');
               
			   grunt.config.merge({
                                compatVersion: "edge",
                                deploy_mode: "html_repo"
                });
		
			//grunt.registerTask("test", ["qunit"]);
            grunt.registerTask("default", [
                        "clean",
                        "lint",
                        "build"
						
            ]);
            grunt.registerTask("unit_and_integration_tests", ["test"]);
            grunt.config.merge({
                        coverage_threshold: {
                                    statements: 0,
                                    branches: 100,
                                    functions: 0,
                                    lines: 0
                        }
            });
};

	/*	karma: {
  options: {
    configFile: 'karma.conf.js',
    port: 9999,
    browsers: ['Chrome', 'Firefox']
  },
  continuous: {
    singleRun: true,
    browsers: ['PhantomJS']
  },
  dev: {
    reporters: 'dots'
  }
}, */
