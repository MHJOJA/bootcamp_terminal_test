let assert = require('assert')
let regCheck = require('../regCheck')

describe('the regCheck function', function(){
    it('should be able to return registrations ending with location', function(){
        assert.equal(true, regCheck( 'XCV 875 GP', 'GP'))
    })
    it('should fail if registration does not end with location', function(){
        assert.equal(false, regCheck( 'CA 471 '))
    })
})