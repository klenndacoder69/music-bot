const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: {
		name: 'say',
		description: 'says something',
	},
    async execute(message) {
        const user_message = message.content.split(" ").slice(1).join(" ");
        message.channel.send(user_message);
    }
}