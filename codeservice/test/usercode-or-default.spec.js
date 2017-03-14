let chai = require('chai'),
  path = require('path');
var assert = require('chai').assert
//const HelloWorld = require('../helloworld');

//Import lib
let lib = require('../index.js').KataService();

// Tell chai that we'll be using the "should" style assertions.
//chai.should();

// syntax is just used for brevity.
describe('add user code or default', () => {
   
   
    let users;
    beforeEach(() => {
      users = [
        {name : 'bogus', userName: 'un1'},
        {name: 'bogus 2', userName : 'usr2'}
      ]
    });
 
    it('return defualt doc', () => {
      let name = 'name test';
      let sut = lib.getUserCodeOrDefault('userName', {name : name});
      assert(sut != null); 
      assert(sut.name === name); 
    });

    it('return user doc', () => {
      let kataname = 'testname';
      let userName = 'username';
      users.push({name : kataname, userName: userName});
      let sut = lib.getUserCodeOrDefault(userName, {name : kataname, users : users});
      assert(sut != null); 
      assert(sut.name === kataname); 
      assert(sut.userName === userName); 

    });

  });
