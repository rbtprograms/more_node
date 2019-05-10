//should always use the cluster module
//apache bench - look it up
const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
  for(let i = 0; i<1e7; i++);
  res.end(`handled by process ${pid}`);
}).listen(8080, () => {
  console.log(`Started process ${pid}`);
});