// var str = 'hello'
// var buf = new Buffer(str)
// console.log(buf)

var array = 'hello'.split('').map(v=>{
  return '0x' + v.charCodeAt(0).toString(16)
})
console.log(array)

var buf = new Buffer(array)
console.log(buf)
console.log(buf.toString())
