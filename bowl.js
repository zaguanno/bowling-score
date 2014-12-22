var game = function game(){
	this.sum = 0;
};

game.prototype.roll = function(pins){
	//console.log("knocked "+ pins + " down!");
	this.sum += pins;
};


game.prototype.score = function(){
	return this.sum;
};

module.exports.game = game;
