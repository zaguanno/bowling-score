var game = function game(){

}

game.prototype.roll = function(pins){
	console.log("knocked "+ pins + " down!")
}


game.prototype.score = function(){
	return -1;
}

module.exports.game = game
