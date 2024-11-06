const { CommandInteraction } = require('discord.js');

// note: note that module.exports is used for us to export the commands for require() 
// slash command ping (example):
module.exports = {
	data: {
		name: "ping",
		description: "Replies with Pong!",
	},
	execute(interaction) {
		interaction.reply('Pong!');
	},
};
