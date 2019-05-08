const { Duplex } = require('stream');

const inout = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if(this.currentCharCode > 90) {
      this.push(null);
    }
  }
});

inout.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);

