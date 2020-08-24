let assert = require('assert')
let transportFee = require('../transportFee')

describe("The transportFee function ", function(){
  
    it ("should return R20 for 'morning'", function() {
            assert.equal('R20', transportFee("morning"));
    });  
    it ("should return R10 for 'afternoon'", function() {
        assert.equal('R10', transportFee("afternoon"));
});  
it ("should return R0 for 'night'", function() {
    assert.equal('free', transportFee("night"));
});  
});


