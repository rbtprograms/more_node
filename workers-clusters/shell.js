//same as child js but with exec
//exec makes a shell so you can use that syntax
const { exec } = require('child_process');
exec('find . -type f | wc -l', (err, stdout, stdin) => {
  if(err) {
    return console.log(`exec error: ${err}`);
  }
  console.log(`Number of files ${stdout}`);
});