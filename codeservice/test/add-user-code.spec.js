// Import chai.
//let lib =  require('../../src/doclib');
let chai = require('chai'),
  path = require('path');
var assert = require('chai').assert
//const HelloWorld = require('../helloworld');

//Import lib
let lib = require('../index.js').KataService();

// Tell chai that we'll be using the "should" style assertions.
//chai.should();

// syntax is just used for brevity.
xdescribe('Add kata object', () => {

    let kata, user;
    let userName = 'testUser';

    beforeEach(() => {
      kata = {
        name: 'kata 1',
        tests: 'var a =1;',
        users: []
      };

      user = {
        userName: userName,
        tests: 'tests',
        code: 'code'
      };
    });

    
    it('can add user test info where there are no users', () => {

      assert(kata.users.length === 0);
      let sut = lib.addUser(user, kata);
      assert(sut != null);
      assert(sut.users.length === 1);
    });

    it('can add user test info where kata users is undefined', () => {
      let k = {};
      let sut = lib.addUser(user, k);
      assert(sut != null);
      assert(sut.users.length === 1);
    });

    it('can add user test info to kata where kata users is null', () => {

      assert(kata.users.length === 0);
      kata.users = null;
      let sut = lib.addUser(user, kata);
      assert(sut != null);
      assert(sut.users.length === 1);
    });

    it('can edit user kata where user kata exits', () => {
     //Arrange
      let code = 'new code';
      let test = 'new test';

      kata.users.push({
        userName: 'bogus one',
        tests: 'tests bad 1',
        code: 'code bad 1'
      });


      kata.users.push({
        userName: userName,
        tests: 'tests bad 1',
        code: 'code bad 1'
      });

      kata.users.push({
        userName: 'bogus two',
        tests: 'test bad2',
        code: 'code bad 3'
      });



      assert(kata.users.length === 3, 'baseline 3 records');
      let updatedUser = kata.users.find(x => { return x.userName === userName });
      assert(updatedUser.tests != user.tests, 'tests should be different');
      assert(updatedUser.code != user.code, 'code shouldbe different');

      //Act
      let sut = lib.addUser(user, kata);
      updatedUser = sut.users.find(x => { return x.userName === userName });

      //Assert
      assert(sut != null);
      assert(sut.users.length === 3, 'no new users added');
      assert(updatedUser.tests === user.tests, 'tests did not update');
      assert(updatedUser.code === user.code, 'code did not update');
    });
});