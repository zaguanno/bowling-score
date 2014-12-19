var assert = require("should");
var gameConstructor = require("../bowl.js").game;

function rollMany(game, rolls, pins) {
	for (var i = 0; i < rolls; i++) {
		game.roll(pins);
	}
}

describe('Bowling Game', function(){
	describe('Gutter game', function(){
		it('Should have a zero score when no pins are knocked down', function(){
			rollMany(this.game, 20, 0);
			this.game.score().should.equal(0);
		});
	});
	describe('Simple games', function(){
		it('Should score 20 if all 1s are rolled', function(){
			rollMany(this.game, 20, 1);
			this.game.score().should.equal(20);
		});
		it('Should score 40 if all 2s are rolled', function(){
			rollMany(this.game, 20, 2);
			this.game.score().should.equal(40);
		});
	});

	beforeEach('Setup a new game', function(){
		this.game = new gameConstructor();
	});

});
