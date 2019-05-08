//4 ways to create a child process in node
const { spawn } = require('child_process');

const find = spawn('find', ['..', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', data => {
  console.log(`Number of files ${data}`);
});
//child events: disconnect, error, message, close
//message most important
//child.stdin, child.stdout, child.stderr

//this is the best way
//this gives you access to shell syntax and gives the speed of chunked buffers from spawn
const child = spawn('find . -type f', {
  // stdio: 'inheret',
  shell: true,
  //cwd: 'path/location' can change the directory the process is working in,
  //env: can set environment opetions,
  detached: true//seperates the child process from its parent
});