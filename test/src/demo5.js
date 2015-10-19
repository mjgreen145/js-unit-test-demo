// Unit tests for Promises.

var chai = require('chai');
var assert = chai.assert;
// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);

var promiseFunctions = require('../../src/demo5');

describe('demo #5', function() {

    it('test a promise which resolves', function(done) {
        var p = promiseFunctions.promiseWhichResolves();

        p.then(function(result) {
        	assert.equal(result, 'It worked!');
        	done();
        });
    });

});
