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
	describe('Sum games', function(){
		it('Should score 70 if 10 3s and 10 4s are rolled', function(){
			rollMany(this.game, 10, 3);
			rollMany(this.game, 10, 4);
			this.game.score().should.equal(70);
		});
		it('Should score 22 if 4 1s, 2 2s, 2 3s, and 2 4s are rolled', function(){
			rollMany(this.game, 4, 1);
			rollMany(this.game, 2, 2);
			rollMany(this.game, 2, 3);
			rollMany(this.game, 2, 4);
			this.game.score().should.equal(22);
		});
	});
	describe('Single spare games', function(){
		it('Should score 15 if 3 5s and 17 0s are rolled', function(){
			rollMany(this.game, 3, 5);
			rollMany(this.game, 17, 0);
			this.game.score().should.equal(15);
		});
	});

	beforeEach('Setup a new game', function(){
		this.game = new gameConstructor();
	});

});
