let assert = require('assert')
let isFromBellville = require('../isFromBellville')

describe('the is from Bellville function', function(){
    it('should return registration starting ith CY', function(){
        assert.equal(true, isFromBellville('CY 78456',"CY"))
    })
    it('should fail if registration does not start with CY', function(){
        assert.equal(false, isFromBellville('CJ 5545'))
    })
})