const http =require('http');
const server = http.createServer();
server.on('request',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*'); 
  res.setHeader('Access-Control-Allow-Headers','*');

  setTimeout(() => {
    res.end('hi')
  }, 1000);
});
server.listen(1234,()=>{
  process.title='cxyczzbcszn'
  console.log('进程ID',process.pid);
})