// Import chai.
//let lib =  require('../../src/doclib');
let chai = require('chai'),
  path = require('path');
var assert = require('chai').assert
//const HelloWorld = require('../helloworld');

//Import lib
let lib =   require('../index.js'); 


// Tell chai that we'll be using the "should" style assertions.
//chai.should();



// syntax is just used for brevity.
describe('Rectangle', () => {
  describe('#width', () => {
   
    beforeEach(() => {
      // Create a new Rectangle object before every test.
     // rectangle = new Rectangle(10, 20);
    
    });

    it('Test if Ramda Works', () => {
     // let foo;
     // null.should.be.undefined;
         let  sut = lib.addTwo(100);
         assert(sut == 102);
    });

  })});