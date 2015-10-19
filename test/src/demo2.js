// Suite execution order in Mocha

var assert = require('chai').assert;

describe('demo #2', function() {

	before(function() {
		console.log('this runs before all the tests');
	});

	beforeEach(function() {
		console.log('this runs before each test');
	});

	afterEach(function() {
		console.log('this runs after each test');
	});

	after(function() {
		console.log('this runs after all the tests');
	});

    it('test number 1', function() {
    	console.log('test number 1');
        assert.isTrue(true);
    });

    it('test number 2', function() {
    	console.log('test number 2');
        assert.isTrue(true);
    });

    it('test number 3', function() {
    	console.log('test number 3');
        assert.isTrue(true);
    });
});
