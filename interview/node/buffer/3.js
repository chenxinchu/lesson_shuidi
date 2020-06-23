const http = require('http'); 
// tcp 传输的是二进制
// 优化的空间？ 
let hello = '';
for (var i = 0; i < 10240; i++) {
  hello += "a"; // 10KB 的字符串？  一次TCP  二进制处理 
}
// 没有用buffer 啊 
console.log(`Hello：${hello.length}`);

// 现在转换成buffer
hello = Buffer.from(hello);

http.createServer((req, res) => {
  res.writeHead(200);
  res.end(hello);
}).listen(8001);
// 在NodeJS中，进行http传输时，若返回的类型为string，则会将string类型的参数，转换为Buffer，
// 通过NodeJS中的Stream流，一点点的返回给客户端。
// 如果我们直接返回Buffer类型，就没有了转换操作，直接返回，减少了CPU的重复使用率
