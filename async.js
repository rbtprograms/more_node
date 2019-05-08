const fs = require('fs');

const readFileAsArray = file => {
  return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        if(err) reject(err);
        const lines = data.toString().trim().split('\n');
        console.log(lines);
        resolve(lines);
      });
  });
}

const countOdd = async () => {
  try {
    const lines = await readFileAsArray('./io.js');
    console.log('LINES: ', lines.length);
  } catch (err) {
    console.log(error);
  }
}

countOdd();