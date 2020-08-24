let assert = require('assert')
const iisFromPaarl = require('../iisFromPaarl')

describe('the is from Paarl function', function(){
    it('should return true for registrarion from Paarl',function(){
        assert.equal(true, iisFromPaarl("CJ 82115",'CJ'))
    })
    it('should fail if registration is not from Paarl', function(){
        assert.equal(false, iisFromPaarl('CA 464',"GP"))
    })
})