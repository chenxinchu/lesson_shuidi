// let o1 = { a: 'hello' }
// let o2 = Object.create(o1);

// o2.b = " world"

// console.log('o1:', o1.b);
// console.log('o2:', o2.a);


const Koa = require('./lib/application');
let app = new Koa();

app.use((req, res) => { // ctx 对象的构建放弃了
  res.end('hello world');
})

app.listen(3000)