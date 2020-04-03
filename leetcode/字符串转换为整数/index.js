var myAtoi = function (str) {
  if (parseInt(str) <= Math.pow(-2, 31)) { // 判断字符串溢出
    return Math.pow(-2, 31);
  }
  if (parseInt(str) >= Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  if (parseInt(str)==false) {
    return 0
  }
  return parseInt(str);
};
// var myAtoi = function(str) {
//   return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
// };
console.log(myAtoi("with words"));
