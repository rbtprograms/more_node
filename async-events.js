const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    console.time('execute');
    this.emit('begin');
    asyncFunc(...args, (err, data) => {
      if(err) {
        return this.emit('error', err);
      }

      this.emit('data', data);
      console.timeEnd('execute');
      this.emit('end');
    });
  }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));
withTime.on('data', data => console.log(data.toString().trim()));

withTime.once('uncaughtException', (err) => {
  console.log(err);
  process.exit(1);
});

withTime.prependListener('data', data => {
  console.log('force a lsitener to go before others');
});

withTime.execute(fs.readFile, __filename);