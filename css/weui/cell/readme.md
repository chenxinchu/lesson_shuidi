界面的宏观视角

结构>组件 (cell) 
组件： 界面构成的基础, 拼积木一样搭建页面
结构的套路
.weui-cell 开启一个组件
  .weui-cell__hd Element
  .weui-cell__bd
  .weui-cell__ft
hd + bd + ft 
__ BEM bllock Element Modifier

- 研究微信官方前端框架weui源码
- BEM 挺好的， 类名取名的依据
- .hd+.bd+.ft 少跟业务相关， 多一些抽象 
- 弹性布局 align-items:center;      flex = 1;中间元素占据主体

