# materila design
安卓 (materila design)

特别？
从css风格 -> 组件化 -> react入门

波浪的感觉？ 如何实现 css?

- material design 的灵魂 ，在于对交互的创新
  波浪感 ，进度条的进度感
  移动端的一些细节cursor:pointer 用的是非button 组件
  user-select none;
  stylus 嵌入式::after :active::after

1. css background-image
  背景图片 URL 引入的方式，在移动时代
  即生成背景，同时有没有用图片 radial-gradient
  10%白，1%透明(高级感)
  trsform: scale(12)

- 我们要做一堆按钮
  为开发准备好基本组件 小程序里用过组件
  要用到的按钮， 这里都会有， warning？ 大一些， 块级的
  提供一些通用的、变通的、各种常见要求的(70%的业务开发)组件
  自己写组件，以后可以重复使用 复用
  css 有一些变化(状态,primary circle block)，如何封装进去？
  html 区别
  1. 把它的样式封装进去
    h5 button按钮做不到
    组件(组合html,css,js)成为一个组件

- ReactDOM React 和 DOM 交互
  基本语法:
  组件是强大的，定义了一个Button组件
  type文字 block ... 有通用性的需求
  1. ReactDOM.render(<div><Button></Button></div>,docuement.getElementById('root'))
  JSX 语法
  才可以在root 里显示组件 组件 要编译
  2. function(props){
    let{}=props
    return(
      <div></div>
    )
  }
  