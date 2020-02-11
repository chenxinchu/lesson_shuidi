// web worker 计算hash    新创建线程
const http = require('http'); 
const fork = require('child_process').fork; // 创建新的进程


http.createServer((req, res) => {
  const compute = fork('./fork_compute.js');
  compute.send('开启新进程');
  compute.on('message',sum=>{
    res.end(`sum is ${sum}`)
  })
  // const sum = longComputation();
  // res.end(`和为${sum}`);
}).listen(1314,()=>{
  console.log(process.pid);
  
});