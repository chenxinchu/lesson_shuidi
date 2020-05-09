// var str = "Buffer对象"
// var buf = new Buffer(str)
// console.log(buf) // <Buffer 42 75 66 66 65 72 e5 af b9 e8 b1 a1>

// var buf = new Buffer(100) // 分配了长度为100字节的Buffer对象
// console.log(buf.length) // => 100
// console.log(buf[10]) // =>一个(0~255)的随机数
// buf[10]=37
// console.log(buf[10])
// buf[10]=-100
// console.log(buf[10]) // => 156
// buf[10]=365
// console.log(buf[10]) // => 109

var fs = require('fs')
// var rs = fs.createReadStream('test.md')
var rs = fs.createReadStream('test.md', {highWaterMark: 11});
var data = ''
rs.on("data", function (chunk){
data += chunk
})
rs.on("end", function () {
console.log(data)
})