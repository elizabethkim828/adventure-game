var Node = require('./node');

var Game = function() {
	this.nodes  = {};
	this.startingPoint = null;
};

Game.prototype.addNode = function(name, text) {
	var newnode = new Node(name, text);
	if (this.startingPoint === null) {
		this.startingPoint = newnode;
	}

	if (this.nodes[name]) {
		throw new Error;
	} else {
		this.nodes[name] = newnode;
	}
	return newnode;
}

Game.prototype.getNode = function(nodeName) {
	return this.nodes[nodeName];
}

// Game.connect(n1: String, n2: String, response: String)
Game.prototype.connect = function(n1, n2, response) {
	if (this.getNode(n1)) {
		this.getNode(n1).connect(this.getNode(n2),response);
	} else {
		throw new Error;
	}
	
}
module.exports = Game;
