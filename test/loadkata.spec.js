const Codeservice  =  require('../codeservice');

//"use strict";
//const path = require('path');
 
/*
reference

 expect(true).toBe(true);
 expect(false).not.toBe(true);
 expect(a).toBe(b);
    expect(a).not.toBe(null);
    expect(foo).toEqual(bar);
      expect(message).toMatch(/bar/);
       expect(a.foo).toBeDefined();

*/

describe('In order to Save a kata ', () => {
  let sut;
  
  beforeEach(() => {
     sut = Codeservice.addTwo(10);
    //let sut = k.getDoc()
  });

  it('test module loading', () => {
   
    expect(sut).toEqual(12);
  });

});