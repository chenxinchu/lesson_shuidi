const buf1 = Buffer.alloc(10)  // 分配大Buffer空间
// console.log(buf1);
const buf2 = Buffer.alloc(10,1)
const buf3 = Buffer.allocUnsafe(10,1)
const buf4 = Buffer.from([1,2,3])
console.log(buf1,buf2,buf3,buf4)