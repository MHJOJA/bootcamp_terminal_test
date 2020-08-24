let assert  = require('assert')
let yearsAgo = require('../yearsAgo')



describe('yearsAgo function', function(){

    it('should return 23 years ago', function(){
        assert.equal(23, yearsAgo('1997'));
    });
    it('should return 25 years ago from now', function(){
      assert.equal(25, yearsAgo('1995'));
  });
  
  it('should return 0 years from now', function(){
    assert.equal(0, yearsAgo('2020'));
  });
  
  
  });
  