'use strict';

module.exports = function(config) {

    config.set({
        frameworks: ['mocha', 'sinon-chai'],
        files: [
            '**/*.js'
        ],
        singleRun: true,
        browsers: ['PhantomJS'],
        hostname: '127.0.0.1',
    });
};
