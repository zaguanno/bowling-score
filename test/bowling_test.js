var assert = require("should")
var gameConstructor = require("../bowl.js").game

describe('Bowling Game', function(){
  describe('Gutter game', function(){
    it('Should have a zero score when no pins are knocked down', function(){
      game = new gameConstructor();
      
      var i = 0;
      for (i; i < 20; i ++) {
          game.roll(0);
      }
      game.score().should.equal(0);
    })
  })

  //beforeEach('Setup a new game', function(){
    //var game = new gameConstructor();
    //});

})
