'use strict';

var foo = {
    value: 1
}

function bar(){
    // this指向foo this.value=1;
    console.log(this);
    console.log(this.value);    
}

// call 手动指定函数内部的this 指向第一个参数
bar.call(foo);
// console.log(foo.value);
bar(); // this 跟函数的运行方式相关
// 普通的函数 this指向全局 global window 

