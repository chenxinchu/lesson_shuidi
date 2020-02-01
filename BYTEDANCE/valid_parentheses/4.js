function longestValidParentheses(s) {
    var max = 0;
    if (s.length == 0 || s.length == 1) return max;
    var stack = [-1];
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length < 1) { // 如果其中一个子串匹配结束
                stack.push(i); // 开启下一个子串匹配
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    return max;
}

console.log(longestValidParentheses(')()())'));