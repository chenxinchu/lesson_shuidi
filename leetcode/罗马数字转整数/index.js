var romanToInt = function (s) {
  var sum = 0;
  var obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  } // 创建对象
  for (var i = 0; i < s.length; i++) { // 遍历
    if (obj[s[i]] < obj[s[i + 1]]) {
      sum += obj[s[i + 1]] - obj[s[i]];
      i++;
    } else {
      sum += obj[s[i]];
    }
  }
  return sum;
};
console.log(romanToInt('MCMXCIV'));


