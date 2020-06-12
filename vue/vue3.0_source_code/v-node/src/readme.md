- vue 架构
  - h 虚拟节点的生成
    1. 可以良好的表达模板结构   html -> json 
    内存  js  json 
    2. 抽象能力(html 标签， 组件(StateFullComponent FunctionalComponent), Portal, ....文本节点)， 便于代码的执行 
    vue 源码更精华 
    3. 虚拟节点 VNode  要有利于 patch diff算法的优化， 

  - render 真实DOM
    diff 算法