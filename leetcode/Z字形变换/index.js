var convert = function (s, numRows) {
  var perRows = 2 * numRows - 2; //等差
  var str = "";
  if (s.length == 0 || numRows <= 1) return s;
  for (var i = 0; i < numRows; i++) { // 控制行
    for (var j = i; j < s.length; j += perRows) {
      str = str.concat(s.charAt(j)); // 第一行和最后一行
      if (i != 0 && i != numRows - 1 && j - 2 * i + perRows < s.length) {
        str = str.concat(s.charAt(j - 2 * i + perRows)); // 中间的行
      }
    }
  }
  return str;
};

console.log(convert("LEETCODEISHIRING",3));