// 把各种template情况，输出成VNode
// data节点的attributes
export function h(tag, data = null, children = null) {
  let flags = null   // 标记， 什么类型的节点
  return { // VNode
    _isVNode: true,   // 架构vue的过程，就说实现vnode的实现
    flags,   // diff 算法优化   没有他也可以很好的实现，但是会多很多重复的耗性能的判断代码
  }
}