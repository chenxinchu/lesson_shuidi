const http = require('http');
// 将服务器充分利用起来，
// 当前服务器性能利用起来 CPU 多核 
const numCPUS = require('os').cpus().length;
const cluster = require('cluster');

if (cluster.isMaster) { // 主进程 调度子进程
  // 不需要为我们的响应服务
  for (let i = 0; i < numCPUS; i++) {
    cluster.fork();
  }
}else{
  // web 天生是多线程的
  http.createServer((req,res)=>{
    res.writeHead(200);
    res.end(`hello world ${process.pid}`);
  }).listen(8000)
}