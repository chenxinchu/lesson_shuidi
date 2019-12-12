// const phoneReg = /1[^35789][0-9]{9}/; // 匹配规则定义 正则表达式 [^35789]表示非35789
// // []表示范围   '\d'表示数字
// console.log(phoneReg.test('陈:16679019715'));
// console.log(typeof phoneReg);


// const phoneReg = /^1[^35789]\d{9}/; // ^1 表示最开始一定要是1
// // []表示范围   '\d'表示数字
// console.log(phoneReg.test('陈:16679019715'));



const phoneReg = /^1[^35789]\d{9}$/; // $表示结尾一定为 \d
// []表示范围   '\d'表示数字
console.log(phoneReg.test('16679019715'));
console.log(/\d{3}-\d{5,8}/.test('010-123456'));

