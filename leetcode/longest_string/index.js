var lengthOfLongestSubstring = function (s) {
  var maxSize = 0; // 长度
  var str = ""; // 新子串
  for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i)
    // console.log(char);

    // 第i个字符在新子串中是否存在
    var index = str.indexOf(char); // 存在返回所在位置，不存在返回-1
    if (index == -1) { // 新子串中没有这个字符
      str += char;
      maxSize = maxSize > str.length ? maxSize : str.length;
    } else { // 重复了
      str = str.substr(index + 1) + char;
    }
  }
  return maxSize;
};

console.log(lengthOfLongestSubstring('abcabcbb'));