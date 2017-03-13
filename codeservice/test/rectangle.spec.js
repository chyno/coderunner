// Import chai.
//let lib =  require('../../src/doclib');
let chai = require('chai'),
  path = require('path');
var assert = require('chai').assert
  //const HelloWorld = require('../helloworld');

//Import lib
let lib = require('../index.js');

// Tell chai that we'll be using the "should" style assertions.
//chai.should();

// syntax is just used for brevity.
describe('Kata data', () => {
  describe('ramda library', () => {
  let kata, user;

    beforeEach(() => {
       kata = {
        name: 'kata 1',
        tests: 'var a =1;',
        users: []
      };
      
       user = {
        name: 'foo'
      };
    });

    it('Test that library an load', () => {
      // let foo;
      // null.should.be.undefined;
      let sut = lib.addTwo(100);
      assert(sut == 102);
    });
    /*
    eports.addUser = R.curry((usr, kt) => {
  let wusr = kt.users.find((x) => x.userName === usr.userName);
  if (wusr) {
    wusr.code = usr.code;
    wusr.tests = usr.tests;
  }
  else {
    kt.users.push(usr);
  }
  return kt;
});
    */

    it('can add user to kata where there are no users', () => {
      
      assert(kata.users.length === 0);
      let sut = lib.addUser(user, kata);
      assert(sut != null);
      assert(sut.users.length === 1);
    });

     it('can add user to kata where kata users is undefined', () => {
      let k = {}; 
      let sut = lib.addUser(user, k);
      assert(sut != null);
      assert(sut.users.length === 1);
    });

      it('can add user to kata where kata users is null', () => {
      
      assert(kata.users.length === 0);
      kata.users = null;
      let sut = lib.addUser(user, kata);
      assert(sut != null);
      assert(sut.users.length === 1);
    });

  })
});