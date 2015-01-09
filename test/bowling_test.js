if(typeof require !== 'undefined') {
    // In node.js
    var assert = require("should");
    var gameConstructor = require("../bowl.js").game;
}
else {
    var gameConstructor = game;
}

describe('Bowling Game', function(){

	beforeEach('Setup a new game', function(){
		//this.game = new gameConstructor();
	});

	describe('Gutter game', function(){
		it('Should have a zero score when no pins are knocked down', function(){
			game = new gameConstructor();
			for(var i = 0; i < 20; i++) {
				game.roll(0);
			}
			game.score().should.equal(0);
		});
	});


});