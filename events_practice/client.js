const readline = require('readline');
const EventEmitter = require('events');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);
server.on('response', resp => {
  console.log(resp);
})

let command, args;
rl.on('line', input => {
  [command, ...args] = input.split(' ');
  client.emit('command', command, args);
});