// var myAtoi = function (str) {
//   if (parseFloat(str) <= Math.pow(-2, 31) || parseFloat(str) >= Math.pow(2, 31) - 1) { // 判断字符串溢出
//     return Math.pow(-2, 31);
//   }
//   // if (parseInt(str)) return 0;
//   // return parseInt(str);
//   return Math.pow(-2, 31);
// };
var myAtoi = function(str) {
  return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));