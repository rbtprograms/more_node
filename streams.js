//streams are collections of data that might ne be available all at one and dont have to fit in memory
//created a file
// const file = fs.createWriteStream('./big.file');

// file.write('hello');

const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  //this is how to read and pipe streams
  //this will save a lot of memory
  const src = fs.createReadStream('./big.file');
  //pipe auto chunks and sends
  //src must be readablestream, res must be a writeablestreamlocation
  src.pipe(res);
});

// fs.readFile('./big.file', (err, data) => {
//   console.log(data.toString().trim());
// });

server.listen(8000);