function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    console.log(this.name); 
}
// Person('chen'); // 作为函数 this指向window
const qing = new Person('qing') // 作为类 this 指向实例
// console.log(qing.getName);  // 
// 构造函数
// console.log(Person.prototype.constructor); 
// 打印qing的原型对象Person, __proto__是qing的私有属性，能够找到qing的原型对象
console.log(qing.__proto__,Person.prototype,qing.__proto__==Person.prototype);

