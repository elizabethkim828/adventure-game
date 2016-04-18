var Connection = require('./connection');

var Node = function(title, text) {
	this.title = title;
	this.text = text;
	this.connections = [];
};

Node.prototype.connect = function(node, response) {
	var obj = {endNode: node, response: response};
	for (var i = 0; i < this.connections.length; i++) {
		if (this.connections[i].response === response) {
			throw new Error;
		}
	}
	this.connections.push(obj);
}



module.exports = Node;
