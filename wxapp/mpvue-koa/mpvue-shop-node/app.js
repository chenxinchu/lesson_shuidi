const Koa= require('koa');
const config = require('./config');
const router =require('./routers');

const app = new Koa();




app.use(router.routes());

app.listen(config.port,()=>{
  console.log(`server is started at port ${config.port}`);
})


