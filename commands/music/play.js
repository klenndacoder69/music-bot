const { YouTubePlugin } = require("@distube/youtube");
module.exports = {
    data : {
        name: 'play',
        description: 'Plays a song',
    },
    async execute(interaction) {
        // split the message into two
        // remove the command name and join the songs
        const client = require('../../index.js');
        let song = interaction.content.split(" ").slice(1).join(" ");
        console.log(song);
        // remove the command name

        const songRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
        const keywords = /^[\w]+(?:\s[\w]+)*$/;     
        // Goal: check if the song is a youtube link, or keywords. If it is a youtube link, check whether it is a valid link, else prompt the user
        // to enter a correct link.
        // If user did entered keywords, use the search based on that.
        if (!songRegex.test(song) && !keywords.test(song)) {

            interaction.reply("The url is not supported! Please try a different link.");
            return;
        }
        
        // if user inputted after the prefix and command name
        if(song) {
            
            interaction.reply(`Successfully joined voice channel ${interaction.member.voice.channel} `);
            try{
                // play the song with the keywords (or the youtube link)
                await client.distube.play(interaction.member.voice.channel, song, {metadata: {
                    interaction: interaction,
                }});
            } catch (error) {
                console.error(error);
            }
        }
        else{
            interaction.reply("Please enter a song name! ");
        }
        
    }
}

