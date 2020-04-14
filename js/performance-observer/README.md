- resource:
- paint:
	- FP: 第一个像素落地
	- FCP: first-contentful-paint
	- FMP: first-meaningful-paint

- navigation(url -> 看到页面):
	- domComplete: DOM结构生成完毕
	- domContentLoadedEventEnd: 网页需要执行的脚本执行完成时间
	- domContentLoadedEventStart: domContentLoaded 事件发生事件
	- domInteractive: DOM 树创建完成(浏览器渲染 生成DOM树阶段) 

- longtask: 长任务(任何超过50ms的任务)
- mark: 打点标记	
- measure: 在每一个点之间测量一下

![图片](https://www.w3.org/TR/navigation-timing-2/timestamp-diagram.svg)
