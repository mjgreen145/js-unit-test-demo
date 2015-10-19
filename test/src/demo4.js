// Unit tests for asynchronous code.

var assert = require('chai').assert;

var asyncFunction = require('../../src/demo4');

describe('demo #4', function() {

    it('test an async function with a callback', function() {
        asyncFunction();

		// assert.isNull(error);
		// assert.isObject(data);
		// assert.equal(data.foo, 'bar');
    });

});
