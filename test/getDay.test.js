let assert = require('assert')
let getDay = require('../getDay')

describe('getDay function', function(){

    it('should retun the day of the week', function(){
      assert.equal(null, getDay('Monday'));
    });
    
    it('should retun the day of the week', function(){
      assert.equal(null,getDay('Sunday'));
    });
    
    
  
  });
  