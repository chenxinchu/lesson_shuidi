const arr = [];
arr.push('chencc');
arr.push('byzhang');
arr.push('ykchou');
arr.push('akk');
// 队列， 栈 先进后出
console.log(arr);
const ak = arr.pop();
console.log(arr);
arr.unshift(ak);
console.log(arr);
arr.unshift('zdhu');
console.log(arr);
const zd = arr.shift();
arr.push(zd);
console.log(arr);
