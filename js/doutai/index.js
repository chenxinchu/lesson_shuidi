function Person(name, age) {
  this.name = name;
  this.age = age;
}
// 覆盖了Object上原有的toString()
Person.prototype.toString = function () {
  return 'I am a Person, my name is ' + this.name;
}


function Man(name, age) {
  // console.log(arguments,'-------');
  // Person 构造函数 把父类的构造函数执行一下
  Person.apply(this, arguments); // important
}
Man.prototype = Object.create(Person.prototype);
var cxc = new Man('chencc', 19);
console.log(cxc + "");
// 覆盖
Man.prototype.toString = function(){
  return 'I am a Man, my name is ' + this.name;
}
console.log(cxc + "");


// var person = new Person('chen', 19);
// console.log(person + ""); // 类型转化， person + "" 主动调用toString() 相当于console.log(person.toString());
// const arr = ['cc','陈方闻'];
// console.log(Object.prototype.toString.call(arr)); // { }
// [object Array]
