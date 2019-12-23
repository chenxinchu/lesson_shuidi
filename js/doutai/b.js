var makeSound = function (animal) {
  // 多态 只要对象具有统一接口， 那么可以交换使用
  // if (animal instanceof Duck) {
  //   console.log('gaga');
  // } else if (animal instanceof Chicken) {
  //   console.log('gege');
  // }
  animal.say(); // 面向对象优化
}
var Duck = function () { };
Duck.prototype.say = function () {
  console.log('gagaga');
}
var Chicken = function () { };
Chicken.prototype.say = function () {
  console.log('gegege');
}
makeSound(new Chicken());