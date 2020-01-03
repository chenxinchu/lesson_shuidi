- Koa 是最流行的node轻量级框架 
  egg.js 基于Koa的二次开发
- Koa new -> app -> listen
  /bin/www 
  www文件 就是网站项目的启动文件
  http.createServer(app.callback())
- 模版
  views
  koa-views() 
  app.use() 启用views中间件
  模版在哪里 使用哪种模版引擎(pug)
- 设置路由router 分层
  routes/index.js 
  koa-routes()
  .get post
  index.routes()
  app.use()
- logger
  koa-logger use 
- 出错模块
- `https://img.bosszhipin.com/`
- `https://img.bosszhipin.com/beijin/mcs/banner/20171031/84ade9701fd02a77fedb6675600a134f33d208e8d6fc287973c46e5cb5346f06.png?x-oss-process=image/resize,w_100,limit_0`
  静态资源 服务器端资源
  IP 
  静态资源 `img.bosszhipin.com`
  DNS 解析？ 网络供应商 列表 
  公司会在网络供应商机房(本地)里去装一些CDN机器 如果本地没有去中央服务器里请求一次 缓存到本地 
- koa-static
- 表单提交
  koa-bodyparser
  GET 请求头里 head GET url?a=1&b=2
  POST head url body.length  + body

## node的发布 
  docker 容器化

  node 项目， 写完后， 测试工程师 (环境？)
  让项目在不同的机器里面 享用相同的环境 跑起来 只需要装一个docker
- docker build -t dockerstudy .
  docker run --name dockerstudycontainer -d -p 1234:1234 2c383bf81f10