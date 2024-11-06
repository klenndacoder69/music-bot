
const { Events } = require('discord.js');

require('dotenv').config();

const prefix = process.env.PREFIX;

module.exports = {
    name: Events.MessageCreate,
    once: false,
    execute(message){
        if(message.content.startsWith(prefix)){
            const args = message.content.slice(prefix.length).split(/ +/);
            console.log(args);
            if (args[0] === "help"){
                const cmd = message.client.commands;
                console.log(cmd);
                let string = "Current options listed: ";
                for (const [name, command] of cmd){
                    string += `\n ${name},`;
                }
                message.reply(string);
                return;
            }
            const command = args.shift().toLowerCase();
            const cmd = message.client.commands.get(command);
            if(!cmd) {
                message.reply("The command does not exist.");
                return;
            }
            cmd.execute(message, args);
        }
    }
}