var isValid = function (s) {
    if (!s || s.length < 1) return true; // 空字符串
    var n = s.length;
    const stack = []; //数组模拟栈 在数组尾部进行插入push或删除pop  FILO 
    // 在数组尾部进行插入push，数组头部移除shift() FIFO
    for (var i = 0; i < n; i++) { // O(n)
        const c = s[i];
        // console.log(c);
        if (c == '(') { // 如果为左括号 等着右括号来抵消它
            stack.push(c); //入栈， 
        } else { //如果为右括号
            if (stack.length < 1) { // 右括号多了
                return false;
            }
            // 将栈里的元素抵消一个
            stack.pop();
        }
    }
    return stack.length > 0 ? false : true; // 左括号多了

}
console.log(isValid('()'));
