var divide = function (dividend, divisor) {
	if (divisor == 0) return null
	var count = 0
	var flag = true
	if (dividend > 0 && divisor < 0 || dividend < 0 && divisor > 0) flag = false
	dividend = Math.abs(dividend)
	divisor = Math.abs(divisor)
	while (dividend >= divisor) {
		dividend -= divisor
		count++
	}
	if (!flag) return -count
	return count>2147483647?2147483647:count

};
console.log(divide(2147483648, 1));
