## 中间件实现
手写body-parser

1. 基础能力
  处理请求，网络基础，报文

  post 请求报文

  POST /test/ HTTP/1.1
  Host: 127.0.0.1:3000
  Content: text/plain;charset=utf-8
  Content-Encoding: gzip 

  缺少什么？
  
2. bodyPaeser 这些请求
  - 处理不同类型的请求体
  - 处理不同类型的编码
  - 处理不同的压缩类型
  - 异常