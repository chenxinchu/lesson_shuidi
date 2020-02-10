var isPalindrome = function (x) {
  if (x < 0) return false; // 负数
  var rem = 0, y = 0;
  var quo = x;
  while (quo != 0) { // 将x倒置 如果还相等，则证明是回文数
    rem = quo % 10; // 每一次循环的个位
    y = y * 10 + rem; // 
    quo = parseInt(quo / 10); 
  }
  return y == x;
};
console.log(isPalindrome(121));