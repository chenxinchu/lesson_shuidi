const Koa= require('koa');
const Router = require('koa-router');
const config = require('./config')

const app = new Koa();
const router = new Router();

router.get('/index',(ctx,next)=>{
  ctx.body='HelloWorld';
})

app.use(router.routes());

app.listen(config.port,()=>{
  console.log(`server is started at port ${config.port}`);
})


