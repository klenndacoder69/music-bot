const {Events} = require('distube');

module.exports = {
    name: "addSong",
    typeEvent: Events.ADD_SONG,
    async execute(queue, song){
        const interaction = song.metadata.interaction;
        interaction.reply(`Added song: ${song.name}`);
        interaction.reply(`The current playlist is: ${queue.songs}`);
    }
}