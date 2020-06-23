const fs = require('fs');
const zlib = require('zlib'); //压缩
// 文件比较大的时候
const file = process.argv[2]; // 
// console.log(file);
// 压缩文件  过程？ 
// io -> 内存 -> 处理 -> 压缩 -> 写回 硬盘
fs.readFile(file, (err, buffer) => {
  console.log(buffer);
});


