module.exports = function(config) {
	'use strict';

    config.set({
        frameworks: ['mocha', 'sinon-chai'],
        // preprocessors: {
        //   '**/*.html': ['html2js']
        // },
        files: [
            // HTML
            // 'templates/*.html',
            // Setup
            'assets/test-setup.js',
        	// Actual code
        	'../assets/scripts/*.js',
        	// Test files
            'assets/scripts/*.js'
        ],
        singleRun: true,
        browsers: ['PhantomJS'],
        hostname: '127.0.0.1',
    });
};
