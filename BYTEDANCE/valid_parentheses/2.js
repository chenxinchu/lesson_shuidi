function isValid(s) {
    if (!s || s.length < 1) return true; // 空字符串
    var n = s.length;
    var sum = 0; // O(1)
    for (var i = 0; i < n; i++) {
        var c = s[i];
        if (c == '(') {
            sum++;
        } else {
            if (sum == 0) {
                return false;
            } else {
                sum--;
            }
        }
    }
    return sum == 0 ? true : false;
}
console.log(isValid('()'));