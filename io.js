//io means anything that is a communication between processes
//threads are difficult/dangerous when threads are sharing the same resources

//node event loop picks events from the event queue and pushes their callbacks to the call stack

//event loop in browser
//stack - where events nad funcitons are tracked
//heap - memory allocated by v8

//event loop is good but can still be clocked
//long for loops block node

//setImmediate makes sure things get set on the next tick of the event loop, no matter what
//process.nextTick is also there but it doesn't work great

const fs = require('fs');

function fileSize (fileName, cb) {
  if(typeof fileName !== 'string') {
    return process.nextTick(cb(new TypeError('arguement should be a string')));
  }

  fs.stat(fileName, (err, stats) => {
    if (err) {
      return cb(err);
    }
    cb(null, stats.size);
  });
}

fileSize(__filename, (err, size) => {
  if (err) throw err;
  console.log(`Size in KB: ${size/1024}`);
});

console.log('hello');