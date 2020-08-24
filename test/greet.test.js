let assert = require('assert')
let greet = require('../greet')

describe('the greet funtion', function(){
    it('should greet Andre correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'))
    })
    it('should be able to greet Karen correctly', function(){
        assert.equal('Hello, Karen', greet("Karen"))
    })
})