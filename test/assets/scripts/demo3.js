// (function() {
// 	'use strict';

//     describe('Demo #3 - NAP.localisation.localiseUrl', function() {

//         it('should localise a non-localised URL', function() {
//             var localisedUrl = NAP.localisation.localiseUrl('/Shop/something', 'gb', 'en');
//             assert.equal(localisedUrl, '/gb/en/Shop/something');
//         });

//         it('should do nothing to a localised URL', function() {
//             var localisedUrl = NAP.localisation.localiseUrl('/br/fr/Shop/something');
//             assert.equal(localisedUrl, '/br/fr/Shop/something');
//         });

//         it('should do nothing to a localised URL', function() {
//             var localisedUrl = NAP.localisation.localiseUrl('/BR/fr/Shop/something');
//             assert.equal(localisedUrl, '/BR/fr/Shop/something');
//         });

//     });

//     describe('generateCanonicalPath', function() {
//         it('does nothing to a unlocalised path', function(){
//             assert.equal(NAP.localisation.generateCanonicalPath('/foo/bar'), '/foo/bar');
//         });

//         it('unlocalises /am/', function(){
//             assert.equal(NAP.localisation.generateCanonicalPath('/am/'), '/');
//         });

//         it('unlocalises /apac/', function(){
//             assert.equal(NAP.localisation.generateCanonicalPath('/apac/'), '/');
//         });

//         it('unlocalises /intl/', function(){
//             assert.equal(NAP.localisation.generateCanonicalPath('/intl/'), '/');
//         });

//         it('unlocalises /intl/foo/', function(){
//             assert.equal(NAP.localisation.generateCanonicalPath('/intl/foo/'), '/foo/');
//         });

//         it('unlocalises /gb/en/', function(){
//             assert.equal(NAP.localisation.generateCanonicalPath('/gb/en/'), '/');
//         });

//         it('unlocalises /gb/en/foo', function(){
//             assert.equal(NAP.localisation.generateCanonicalPath('/gb/en/foo'), '/foo');
//         });

//         it('unlocalises /gb/en/d/foo', function(){
//             assert.equal(NAP.localisation.generateCanonicalPath('/gb/en/d/foo'), '/foo');
//         });

//         it('unlocalises /gb/en/m/foo', function(){
//             assert.equal(NAP.localisation.generateCanonicalPath('/gb/en/m/foo'), '/foo');
//         });

//         it('unlocalises /am/en/foo', function(){
//             assert.equal(NAP.localisation.generateCanonicalPath('/am/en/foo'), '/foo');
//         });

//         it('unlocalises /intl/am/en/foo', function(){
//             assert.equal(NAP.localisation.generateCanonicalPath('/intl/am/en/foo'), '/foo');
//         });

//         it('unlocalises /am/am/en/foo', function(){
//             assert.equal(NAP.localisation.generateCanonicalPath('/am/am/en/foo'), '/foo');
//         });
//     });

// }());