"use strict";

var inquirer = require('inquirer');
var game = require('./game.source');

console.log('Hi, welcome to our Game!');

function genChoices(connec) {
	for (var i = 0; i < connec.length; i++) {
		connec[i]
	}
}

inquirer.prompt([
  {
    type: 'list',
    name: 'direction',
    message: game.nodes['direction'].text,
    choices: [
      'left',
      'right'
    ]
  },
  {
    type: 'list',
    name: 'color',
    message: function(answers) {
    	if (answers.direction === 'left') {
    		return game.nodes['leftResp'].text;
    	}
    },
    choices: ['red', 'green', 'blue'],
  }
]).then(function (answers) {
	if (answers.color === 'blue') {
		console.log('yep');		
	} else {
		console.log('wrong');
	}
  
});