var divide = function (dividend, divisor) {
	var flag = ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) ? true : false
	var absDividend = dividend > 0 ? dividend : -dividend
	var absDivisor = divisor > 0 ? divisor : -divisor
	var left = 0
	var right = flag ? 2147483647 : 2147483648
	var result = left
	while (left <= right) {
		var middle = Math.floor((right + left) / 2)
		if (middle * absDivisor == absDividend) {
			result = middle
			break
		} else if (middle * absDivisor > absDividend) {
			right = middle - 1
		} else {
			result = middle
			left = middle + 1
		}
	}
	result = flag ? result : -result
	return result
}
console.log(divide(-7, 3));