let assert = require('assert')
let isFrom = require('../fromWhere')


describe('the is from function', function(){
    it('should pass if registration starts with location', function(){
        assert.equal(true, isFrom('CY 785','CY'))
    })
    it('should fail if registration does not have location', function(){
        assert.equal(false, isFrom('WXC 784 '))
    })
    it('should fail if registration does not start with location', function(){
        assert.equal(false, isFrom('785 GP'))
    })
})
