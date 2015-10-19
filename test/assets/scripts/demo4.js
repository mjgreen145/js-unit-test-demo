// (function() {
// 	'use strict';

//     describe('Demo #4 - Testing against the DOM', function() {

//         before(function() {
//             sinon.stub(NAP.analytics, 'trackSomething');
//         });

//         after(function() {
//             NAP.analytics.trackSomething.restore();
//         });

//         it('should call NAP.analytics.trackSomething when button clicked', function() {
//             var button = document.getElementById('super-button');
//             button.click();

//             assert.isTrue(NAP.analytics.trackSomething.calledOnce);
//             assert.isTrue(NAP.analytics.trackSomething.calledWithExactly('the button has been clicked!!!'));
//         });

//     });

// }());