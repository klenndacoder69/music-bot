const { Events } = require('distube');

module.exports = {
    name: "playSong",
    typeEvent: Events.PLAY_SONG,
    async execute(queue, song){
        // interaction is embedded in the metadata of the song
        const interaction = song.metadata.interaction;
        interaction.reply(`Currently playing: ${song.name}`);
        // // give the current playlist of the bot
        // interaction.reply(`The current queue of the bot is: ${queue.songs}`)
    }
}