var reverse = function (x) {
  var abs_x = Math.abs(x); // 求绝对值
  var str_x = String(abs_x); // 转换为字符
  var resultStr = str_x.split('').reverse().join(''); // 字符串倒置
  var result_x = parseInt(resultStr); // 转换为整型
  if (result_x <= Math.pow(-2, 31) || result_x >= Math.pow(2, 31) - 1) { // 判断字符串溢出
    return 0;
  }
  return x > 0 ? resultStr : (0 - resultStr);
};
console.log(reverse(1534236469));
console.log(reverse(123));
console.log(reverse(-123));


