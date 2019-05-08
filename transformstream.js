const { Transform } = require('stream');

const upperCastTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(upperCastTr).pipe(process.stdout);

