const fs = require('node:fs');
const path = require('node:path');

function loadDistubeEvents(client){
    const folderPath = path.join(__dirname, '../events/distube');
    // filter events based on the .js files
    const distubeEvents = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));
    console.log(distubeEvents);
    for (const file of distubeEvents){
        // goal is to map each file to the client distube event
        const filePath = path.join(folderPath, file);
        // console.log(file);
        const event = require(filePath);
        if (event.once){
            // map the events to the distube
            client.distube.once(event.name, (...args) => event.execute(...args));
        }
        else{
            client.distube.on(event.name, (...args) => event.execute(...args));
        }
    }
}

module.exports = { loadDistubeEvents }