let assert = require('assert')
let isFromTown =require('../isFromCapeTown')
const isFromCapeTown = require('../isFromCapeTown')

describe('the Cape Twn function',function(){
    it('should return registration numbers from Cape Town', function(){
        assert.equal(true, isFromCapeTown('CA 78545',"CA"))
    })
    it('should fail if registration does not start with CA', function(){
        assert.equal(false, isFromCapeTown('CF 5568', 'CJ'))
    })
})