- this 是有原则的，
  1. 普通函数被调用 this指向window或者global
  2. 方法作为对象的方法被调用时，this指向对象 
  3. 被new的方式运行时，this指向实例化的对象
  'use strict' 严格格式下 为undefined
- call 手动指定函数运行时的this，并将函数运行  
  bar.call(foo) this指定的是foo
- bar.call 
  在js中，函数是对象
  手写一个call? 