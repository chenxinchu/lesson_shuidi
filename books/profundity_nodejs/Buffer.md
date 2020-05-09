# 理解Buffer

## 认识Buffer

- Buffer可以理解为类似于Array对象，不同的是，Buffer主要用于操作字节
- Buffer是一个JS与C++结合的模块，性能部分由C++实现，非性能部分用JS实现
- Buffer用于处理大量字节流数据

## Buffer对象

初识Buffer
```js
var str = "Buffer对象"
var buf = new Buffer(str)
// => <Buffer 42 75 66 66 65 72 e5 af b9 e8 b1 a1>
// 说明Buffer将字符串转化为二进制，一个中文字符占3个字节
```

Buffer与Array相似
```js
var buf = new Buffer(100) // 分配了长度为100字节的Buffer对象
console.log(buf.length) // => 100
console.log(buf[10]) // =>一个(0~255)的随机数
// 赋值
buf[10]=37 
console.log(buf[10]) // => 37
buf[10]=365
console.log(buf[10]) // => 109
buf[10]=-100
console.log(buf[10]) // => 156
// 赋值大于255，则该值减去若干个256，得到一个0～255的数
// 赋值小于255，则该值加上若干个256，得到一个0～255的数
```

## Buffer内存分配

Buffer对象的内存分配不在V8的堆内存中，而是在Node的C++层面实现内存申请，在JS层面实现内存分配   
Buffer用于处理大量字节流数据，不能每次需要内存就向操作系统申请，会对操作系统有一定的压力  
Node采用了slab分配机制，它是一种动态内存管理机制，应用于Linux等操作系统中  
slab是一块申请好了固定大小的内存区域  

slab的三种状态
  - full：完全分配状态
  - partial：部分分配状态
  - empty：没有被分配状态

我们可以采用`new Buffer(size)`分配指定大小的Buffer对象   
Node以8KB为界限来区分Buffer是大对象还是小对象:`Buffer.poolSize = 8*1024`   

### 分配小对象

```js
var pool
function allocPool() {
  pool = new SlowBuffer(Buffer.poolSize)
  pool.used = 0
}
```
上面代码表示分配了一个8K的pool对象，此时slab处于empty状态
![](https://upload-images.jianshu.io/upload_images/3112582-44f1c330ce5a723e.png?imageMogr2/auto-orient/strip|imageView2/2/w/741/format/webp)

此时我们再构建小Buffer对象：
```js
new Buffer(1024);
```
这次构造将会检查pool对象，如果pool对象没被创建，将会自动创建一个slab单元指向它：
```js
if(!pool || pool.length - pool.used < this.length) allocPool()
```
同时，当前buffer对象的parent属性指向该slab，并记录下是从这个slab的哪个位置（offset）开始使用的，slab对象自身也记录被使用了多少字节，代码如下：
```js
this.parent = pool;
this.offset = pool.used;
pool.used += this.length;
if (pool.used & 7) pool.used = (pool.used + 8) & ~7;
```
下图表示新的slab单元初次分配Buffer对象,这时候的slab为partial状态
![](https://upload-images.jianshu.io/upload_images/3112582-5f7489e71cb597aa.png?imageMogr2/auto-orient/strip|imageView2/2/w/759/format/webp)

当再次创建Buffer对象时，构造过程中将会判断这个slab的剩余空间是否足够，如果足够，使用剩余空间，并更新slab的分配状态
```js
new Buffer(3000)
```
此时的slab单元分配情况如下图：
![](https://upload-images.jianshu.io/upload_images/3112582-39cd561cdfff30c1.png?imageMogr2/auto-orient/strip|imageView2/2/w/741/format/webp)

如果slab的剩余空间不够本次分配，则会构造一个新的slab，原slab中剩余的空间将会造成浪费

```js
new Buffer(1); //浪费
new Buffer(8192);
```

### 分配大对象

大于8kb的buffer对象，会被分配一个SlowBuffer对象作为slab单元，这个slab单元将被这个大的Buffer对象独占
```js
// Big buffer, just alloc one
this.parent = new SlowBuffer(this.length);
this.offset = 0;
```
这里的SlowBuffer类是在C++中定义的，虽然引用buffer模块可以访问到它，但是不推荐直接操纵它，而是用buffer替代。上面提到的buffer对象都是js层面的，能够被v8标记回收，但是其内部的parent属性指向的SlowBuffer对象却来自Node的c++模块，是c++层面的buffer对象，所用的这部分内存不在v8的堆中

综上所述，真正的buffer内存是在node的c++层面提供的，js层面只是使用它。当进行小而频繁的buffer操作时，采用slab的机制进行预先申请和事后分配，使得js到操作系统之间不必有过多的内存申请方面的系统调用。对于大块的buffer而言，直接使用c++层面提供的内存，无需频繁的分配操作


## Buffer的转换

Buffer对象可以和字符串进行相互转换，支持的编码类型有
- ASCII
- UTF-8
- UTF-16LE/UCS-2
- Base64
- Binary
- Hex

字符串转Buffer，通过构造函数来完成
```js
new Buffer(str,[encoding])
```
encoding不传时，默认为utf-8类型的编码和存储

一个Buffer对象可以储存不同编码内容（不建议）
```js
buf.write(string,[offset],[length],[encoding])
```

Buffer转字符串，利用toString()即可
```js
buf.toString([encoding], [start], [end])
// 利用start和end实现局部转换
```

判断Buffer是否支持该编码类型
```js
Buffer.isEncoding(encoding)
```
遗憾的是，中国常用的GBK、GB2312、BIG-5都不支持

对于不支持的编码格式，可以使用iconv和iconv-lite来解决   
其中，iconv-lite采用纯js实现，iconv通过c++调用libiconv库实现。在性能方面，iconv-lite由于少了c++到js层次的转换，因此，消耗更少的cpu，效率更高一点  
```js
var iconv = require('iconv-lite');
// Buffer转字符串
var str = iconv.decode(buf, 'win1251');
// 字符串转Buffer
var buf = iconv.encode("Sample input string", 'win1251');
```
iconv和iconv-lite会有不同的处理   
iconv和iconv-lite会有不同的处理。iconv-lite对于无法转换的单字节输出，多字节输出�
iconv则由三级降级策略，会尝试翻译无法转换的内存，或者忽略这些内容，如果不设置忽略，iconv可能会报EILSEQ异常   
```js
var iconv = new Iconv('UTF-8', 'ASCII');
iconv.convert('ça va'); // throws EILSEQ
var iconv = new Iconv('UTF-8', 'ASCII//IGNORE');
iconv.convert('ça va'); // returns "a va"
var iconv = new Iconv('UTF-8', 'ASCII//TRANSLIT');
iconv.convert('ça va'); // "ca va"
var iconv = new Iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE');
iconv.convert('ça va Ȧ '); // "ca va "
```


## Buffer的拼接

buffer的使用场景，很多是一段一段的从流中读取内容
```js
var fs = require('fs')
var rs = fs.createReadStream('test.md')
var data = ''
rs.on("data", function (chunk){
data += chunk
})
rs.on("end", function () {
console.log(data)
})
```
data事件中获取的chunk对象其实就是buffer对象   
`data += chunk` 也就拼接buffer,它等价于`data = data.toString() + chunk.toString()`   
以上针对英语环境，中文环境会出问题  
我们限定可读流的每次读取的buffer长度限制为11
```js
var rs = fs.createReadStream('test.md', {highWaterMark: 11});
```
则很有可能出现如下情况
```js
��前明月���，疑是地上霜��
举头望明月，��头思故���
```

乱码产生的原因：  
这首诗原始的buffer应该是这样的
```js
<Buffer e5 ba 8a e5 89 8d e6 98 8e e6 9c 88 e5 85 89 ef bc 8c e7 96 91 e6 98 af e5 9c b0 e4 b8 8a e9
9c 9c ef bc 9b e4 b8 be e5 a4 b4 e6 9c 9b e6 98 8e e6 9c 88 ...>
```
由于，我们限定了长度，因此，每个buffer对象的长度都为11,7次读完，每次的结果就变成了这样：
```js
<Buffer e5 ba 8a e5 89 8d e6 98 8e e6 9c>
<Buffer 88 e5 85 89 ef bc 8c e7 96 91 e6>
```
因为，默认为utf-8的读取，因此，第四个字，只能显示一半  

setEncoding()和string_decoder()  
为了解决上文中的乱码问题，我们应该设置一些编解码格式
```js
readable.setEncoding(encoding)
var rs = fs.createReadStream('test.md', { highWaterMark: 11});
rs.setEncoding('utf8');
```
通过这个方法，我们传递的不再是buffer对象，而是编码后的字符串了

正确拼接Buffer  
```js
var chunks = [];
var size = 0;
res.on('data', function (chunk) {
    chunks.push(chunk);
    size += chunk.length;
});
res.on('end', function () {
    var buf = Buffer.concat(chunks, size);
    var str = iconv.decode(buf, 'utf8');
    console.log(str);
});
```
正确的拼接方式，是用一个数组来存储接收到的所以buffer片段，然后调用buffer.concat()合成一个buffer对象  

## Buffer与性能(重点)


### 数据传输

buffer在文件io和网络io中具有广泛应用，不管是什么对象，一旦进入到网络传输中，都需要转换为buffer，然后以二进制进行数据传输
```js
var http = require('http');
var helloworld = "";
for (var i = 0; i < 1024 * 10; i++) {
    helloworld += "a";
}
// helloworld = new Buffer(helloworld);
http.createServer(function (req, res) {
    res.writeHead(200);
    res.end(helloworld);
}).listen(8001);
```
我们用ab发起200个并发
```bash
ab -c 200 -t 100 http://127.0.0.1:8001/
```
测试结果如下：
![](https://upload-images.jianshu.io/upload_images/3112582-4f68bf084fddad38.png?imageMogr2/auto-orient/strip|imageView2/2/w/785/format/webp)
这里QPS（每秒查询次数）是2527.64，传输率是25370.16kb/s 

然后，我们取消掉注释，也就是不进行转换了，直接发送buffer  
![](https://upload-images.jianshu.io/upload_images/3112582-a21c326f597d0022.png?imageMogr2/auto-orient/strip|imageView2/2/w/765/format/webp)

qps提升了将近1倍  

在构建web服务时，将页面的动态内容和静态内容进行分离，静态内容可以通过先转换为buffer的方式，提升传输性能。

### 文件读取

文件读取时需要设置好highWaterMark参数。也就是我们在fs.createReadStream(path,opts)时，可以传入一些参数
```js
{
flags: 'r',
encoding: null,
fd: null,
mode: 0666,
highWaterMark: 64 * 1024
}
```
还可以设置start和end来指定读取文件的位置范围：
```js
{start: 90, end: 99}
```
`fs.createReadStream()`的工作方式是在内存中准备一段buffer，然后，通过`fs.read()`读取时，逐步从磁盘中将字节复制到buffer中。完成一次读取，则从这个buffer中通过`slice()`取出部分数据作为一个小buffer对象，再通过data事件传递给调用方。如果buffer用完，则重新分配一个，如果还有剩余，则继续使用。
```js
var pool;
function allocNewPool(poolSize) {
pool = new Buffer(poolSize);
pool.used = 0;
}
```
在理想状态下，每次读取的长度都是用户指定的highWaterMark，剩余的还可分配给下一次。pool是常驻内存的，只有当pool单元神域数量小于128（kMinPoolSpace）字节时，才会重新分配一个buffer对象
```js
if (!pool || pool.length - pool.used < kMinPoolSpace) {
// discard the old pool
pool = null;
allocNewPool(this._readableState.highWaterMark);
}
```
注意两点:
- highWaterMark设置对buffer内存的分配和使用有一定影响
- highWaterMark设置过小，可能导致系统调用次数过多

文件读取基于buffer分配，buffer基于Slowbuffer分配，如果文件过小，则可能造成slab的浪费。  
`fs.createReadStream()`内部使用了`fs.read()`实现，会多次调用系统磁盘，如果文件过大的话，highWaterMark将会决定出发系统调用的次数和data事件的次数  

以下是node自带的基准测试：在`benchmark/fs/read-stream-throughput.js`下：
```js
function runTest() {
    assert(fs.statSync(filename).size === filesize);
    var rs = fs.createReadStream(filename, {
        highWaterMark: size,
        encoding: encoding
    });
    rs.on('open', function () {
        bench.start();
    });
    var bytes = 0;
    rs.on('data', function (chunk) {
        bytes += chunk.length;
    });
    rs.on('end', function () {
        try { fs.unlinkSync(filename); } catch (e) { }
        // MB/sec
        bench.end(bytes / (1024 * 1024));
    });
}

//执行结果
fs/read-stream-throughput.js type=buf size=1024: 46.284
fs/read-stream-throughput.js type=buf size=4096: 139.62
fs/read-stream-throughput.js type=buf size=65535: 681.88
fs/read-stream-throughput.js type=buf size=1048576: 857.98
```
可以看出，highWaterMark的值越大，读取速度越快

## 总结

- Buffer用于存储二进制对象
- Buffer对象的内存分配不在V8的堆内存中，而是在Node的C++层面实现内存申请，在JS层面实现内存分配   
- 创建Buffer对象时，会判断slab的空间是否足够，如果不够，则会构造一个新的slab，原slab中剩余的空间将会造成浪费
- Buffer对象可以和字符串进行相互转换，对于不支持的编码格式，可以使用iconv和iconv-lite来解决
- 在数据传输中，数据一旦进入到网络传输中，都需要转换为buffer，然后以二进制进行数据传
- 在文件读取中，highWaterMark设置过小，可能导致系统调用次数过多；highWaterMark的值越大，读取速度越快