var longestValidParentheses = function (s) {
    var max = 0;
    if (s.length == 0 || s.length == 1) return max;
    var stack = []; //栈
    for (var i = 0; i < s.length; i++) {
        var tempMax = 0;
        for (var j = i; j < s.length; j++) {
            if (s[j] == '(') {
                stack.push('(');
                tempMax++;
            } else if (s[j] == ')') {
                if (stack.length < 1) {
                    max = max < tempMax ? tempMax : max;
                    break;
                } else {
                    stack.pop();
                    tempMax++;
                }
            }
        }
        if (stack.length == 0) {
            max = max < tempMax ? tempMax : max;
        }
        stack = [];
    }
    return max;
}
console.log(longestValidParentheses(')()())'));
