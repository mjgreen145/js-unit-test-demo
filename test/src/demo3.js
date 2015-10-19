// Unit tests for synchronous code.
// Also, buggy code

var assert = require('chai').assert;

var getModeOfArray = require('../../src/demo3');

describe('demo #3', function() {

    it('getModeOfArray works correctly with letters', function() {
        assert.equal(getModeOfArray(['a', 'b', 'a']), 'a');
    });

    it('getModeOfArray works correctly with numbers', function() {
        assert.equal(getModeOfArray([1, 2, 1, 2, 1]), 1);
    });


    // it('getModeOfArray works on an empty array', function() {
    // 	assert.isNull(getModeOfArray([]));
    // });

    // it('getModeOfArray works on an array with one element', function() {
    // 	assert.equal(getModeOfArray(['a']), 'a');
    // });

    // it('getModeOfArray works on an array with more than one possible result', function() {
    // 	var mode = getModeOfArray(['a', 'b', 'c', 'b', 'a']);
    // 	assert.isTrue(mode === 'a' || mode === 'b');
    // });

});
