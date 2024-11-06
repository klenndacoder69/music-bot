// Require the necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
// const { token } = require('./config.json');
const { loadCommands } = require('./utils/loadCommands');
const { loadEvents } = require('./utils/loadEvents');
const { loadDistubeEvents } = require('./utils/loadDistubeEvents');
const { DisTube } = require('distube');
const { SpotifyPlugin } = require("@distube/spotify");
const { FilePlugin } = require('@distube/file');
const { YouTubePlugin } = require('@distube/youtube');

require('dotenv').config();
const token = process.env.TOKEN;
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates] });
client.commands = new Collection();
    
client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    plugins:[
        new SpotifyPlugin(),
        new FilePlugin(),
        new YouTubePlugin(),
    ],
})
const utube = new YouTubePlugin();
client.distube.utube = utube;
// functions to set up commands and events for the discord bot
loadCommands(client);
loadEvents(client);

// note: you might have problems in the directory part, also check the typeEvents of the distube folder

loadDistubeEvents(client);

// client.distube.on("playSong", (queue, song) => {
//     song.metadata.interaction.reply(`Currently playing: ${song.name}`);
//     // queue.textChannel.send(`Currently playing: ${song.name}`);
// });
// Log in to Discord with your client's token
client.login(token);

module.exports = client;