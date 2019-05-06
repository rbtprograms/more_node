// Two important global node items: process and buffer
// 	process lets us interact with environment.
// 	process: gives information about node itself, process.env comes off of this.
// 	process.env gives a COPY of the user environment, so if you change it then there it won’t change anything
// 	process.release.lts helps us know if the node is using lts.
// 	process is an event emitter

//process is an event emitter

process.on('exit', (code) => {
    //do syncronous operation before the node process ends
    //this happens when event loop has nothing to do
})

process.on('uncaughtException', (err) => {
    //something went unhandled
    //do some cleanup and exit!

    //should force this to exit or it will continue with problems
    process.exit(1)
});

//keeps event loop busy
process.stdin.resume();

//buffer
//used heavily to work with binary streams
//chunk of memory outside of v8
//must include a character encoding when reading, since its just raw bytes
//initializes an empty buffer
Buffer.alloc(5)

//this creates a buffer with real data, faster but unsafe
Buffer.allocateUnsafe()

//creates a buffer from an actual piece of data
Buffer.from('hello')

//example
//process, and convert last three bytes
const fs = require('fs');

const conversionMap = {
    '88': '65',
    '89': '66',
    '90': '67'
}

//convert file to buffer
fs.readFile(__filename, (err, buffer) => {
    //get last three bites
    let tag = buffer.slice(-4, -1);

    //change last three bytes
    for(let i = 0; i < tag.length; i++) {
        tag[i] = conversionMap[tag[i]];
    }

    //sliced buffer ARE THE SAME as their sliced versions
    console.log(buffer.toString());
});
