let assert = require('assert')
let weekDay = require('../weekDay')

describe('the week day function', function(){
    it('should return true if day does not start with  "S"',function(){
        assert.equal(true, weekDay('Monday'))
    })
    it('should fail if day starts with "S"',function(){
        assert.equal(false, weekDay('Sunday'))
    } )
})