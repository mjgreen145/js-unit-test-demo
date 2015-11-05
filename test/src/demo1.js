// Testing basics, with Mocha and Chai
// http://chaijs.com/api/assert/

var assert = require('chai').assert;

describe('demo #1', function() {

	it('Basic equality', function() {
        assert.equal('Hello World!', 'Hello World!');
    });

    it('Basic equality... ?', function() {
        assert.equal('17', 17);
    });

    it('Strict equality', function() {
        assert.strictEqual(17, 17);
    });

    it('Test for Boolean value', function() {
        assert.isTrue(true);
    });

    it('Test for types', function() {
        assert.isObject({});
        assert.isArray([]);
        assert.isFunction(function(){});
        assert.isNull(null);
    });
});
