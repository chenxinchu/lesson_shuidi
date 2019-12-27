- 事件监听的执行逻辑？
  浏览器 chrome.exe 进程
  js 是chrome里的语言编译器来执行的
  html + css DOM树 
  js 执行 脚本 
  事件 异步 
- 注册事件？ micro event 回调函数
- 事件发生时怎么执行？
js 单线程语言 onload 
轮询注册事件的地方 

订阅 发布者模式

房 楼盘 发布者(发布有房卖的信息)
买房的人 订阅者 
建模 

- listen 添加订阅者
  saleOffice.clientList.push(fn); 形成订阅关系 
- saleOffice 发布者 
  trigger 有事通知 
  把所有的订阅者都执行一次
- apply 函数除运行外，指定其this指向 arguments 

- document.body.addEventListener('click',fn);
  发布者 document.body 它有多个订阅者
  订阅者 fn
  document.body.events = [] click 
  trigger 
    event.each(fn)