// (function() {
// 	'use strict';

//     describe('Demo #5 - Mocking an API', function() {

//     	var server;

//         beforeEach(function() {
// 			server = sinon.fakeServer.create();
//         });

//         afterEach(function() {
//             server.restore();
//         });

//         it('should callback with the data if successful', function(done) {

//         	server.respondWith('GET', 'http://api.net-a-porter.com/NAP/GB/en/detail/636144', [
// 				200,
// 				{ 'Content-type': 'application/json' },
// 				JSON.stringify(mockProductResponse)
// 			]);

//         	NAP.productDetails.getProduct('636144', function(error, data){
//         		assert.isNull(error);
//         		assert.deepEqual(data, mockProductResponse);
//         		done();
//         	});

//         	server.respond();
//         });

//     });

// }());