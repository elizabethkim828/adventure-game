var Connection = function(nextNode, condition) {
	this.value = nextNode;
	this.name = condition;
	this.short = this.name;
};

module.exports = Connection;
