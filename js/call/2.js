// 1. bar 函数运行，内部的this指向foo
// 2. bar.call 函数即对象
// bar.call(foo)
// 任何函数都具有peototype属性
'use strict';
Function.prototype.call2 = function(context){
    // console.log('手动模拟call功能');
    // console.log(context);
    // 1. 把原来的函数执行一下
    // 2. 并且它内部的指针指向context
    // func()是this
    // this();
    context.fn=this;
    context.fn();
}
function func(){
    console.log(this.value);
}
var foo ={
    value:1
}
func.call2(foo);