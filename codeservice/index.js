'use strict'
const R = require('Ramda');

exports.KataService = function () {
  
  const getKata = (name) => R.find(x => x.name === name);
  const addUserArray = R.unless(R.propIs(Array, 'users'), R.assoc('users', []));


  const getUserCodeOrDefault = R.curry((userName, doc) => {
    let dc = doc;
    if (doc.users) {
      let wdoc = dc.users.find(x => x.userName === userName);
      if (wdoc) {
        wdoc.name = dc.name;
        dc = wdoc;

      }
    }
    return dc;
  });


  const log = R.curry((prefix, data) => console.log(prefix, data));
  return {
    addUser : R.curry((usr, kt) => {

      if (!kt.users) {
        kt.users = [];
      }
      let wusr = kt.users.find((x) => x.userName === usr.userName);
      if (wusr) {
        wusr.code = usr.code;
        wusr.tests = usr.tests;
      } else {
        kt.users.push(usr);
      }
      return kt;
    }),

    getUserCodeOrDefault : getUserCodeOrDefault
  };
};





//R.compose(addUser(user),addUserArray, getKata('kata 2'))(katas)
//export { getKata, addUserArray, addUser, log, getUserCodeOrDefault };