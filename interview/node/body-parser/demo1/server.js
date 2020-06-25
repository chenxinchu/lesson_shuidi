var http = require('http');
const { EventEmitter } = require('events');

var parsePostBody = function(req,done){
  var length = req.headers['content-length']
  // console.log(length,'----------') 
  var arr=[]
  var chunks;
  // console.log(req instanceof EventEmitter,'+++++++++++')

  req.on('data',buff=>{
    arr.push(buff)
  })

  req.on('end',()=>{
    chunks = Buffer.concat(arr)
    done(chunks)
  })
}

var server = http.createServer(function(req,res){
  console.log(req);
  // res.end('hello')
  parsePostBody(req,(chunks)=>{
    var body = chunks.toString()
    res.end(`your nick is ${body}`)
  })
})

server.listen(3000)