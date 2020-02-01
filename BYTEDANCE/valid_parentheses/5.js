function longestValidParentheses(s) {
  if (!s || s.length < 1) return 0;
  var left = right = max = 0;
  // 从左往右遍历一遍
  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      left++; 
    } else {
      right++;
    }
    if (left == right) {
      max = Math.max(max, 2 * right);
    } else if (right > left) { // 先出现右括号
      left = right = 0; // 开始新子串
    }
  }
// 从右往左再走一遍
  left = right = 0;
  for(var i=s.length-1;i>=0;i--){
    if (s[i] == '(') {
      left++; 
    } else {
      right++;
    }
    if (left == right) {
      max = Math.max(max, 2 * left);
    } else if (left > right) { // 先出现左括号
      left = right = 0; // 开始新子串
    }
  }
  return max;
}
console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses('((())(())'));