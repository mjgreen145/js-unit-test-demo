# 2 main qualities of good test suites

1) Tests should be order independant

2) Tests should be repeatable, with consistant results.

## Demo 1

Introduce mocha, chai, and the different assertion functions available.

## Demo 2

Talk about the flow execution of a test suite

## Demo 3

Talk about testing a function which returns somethign (synchronous)
Also talk about what value tests add, and why to test for edge cases

## Demo 4

Talk about testing async code. Show code, write a test which passes, but then change value in code.
Explain why test still passes.
Add the 'done' function, and use it to complete a valid test.
Explain the value in writing tests that fail before the code is implemented.

## Demo 5 - Promises

Talk about the basics of how to test a function which returns a promise
Demonstrate the test passing with just a resolve handler.
Make the promise fail and see the test fail, but because of time out.
Explain Mocha's support for Promises, and refactor the test to be sync, and return the Promise.
Make even better by adding chai-as-promised
	- Uncomment both lines at top
	- replace assert with assert.eventually, and replace result with p

## Demo 6 - Spys and stubs

Write a test which asserts on the calling of doSomethingAwesome, using sinon spys
Replace the spy with a stub

# Testing in the DOM

## Demo 1

Introduce Karma + Phantom

## Demo 2

How the f*** do you test code like that, in a browser? There is nothing to call or latch on to once it has been executed once.

## Demo 3

Better structured code makes it easier to test. It can also lead to better readability.
Add test-setup for global namespacing.

## Demo 4

Writing code that touches the DOM is inevitable
In Karma, your code will run with an empty DOM, without any of the HTML you are expecting.
Demo how to use fake HTML:
document.body.innerHTML = '<div id="super-button"></div>'
Explain the need to re-run the init function
Use triggerEvent function
Replace with document.body.innerHTML = window.__html__['templates/index.html'];
And explain reasons why this might be better.
