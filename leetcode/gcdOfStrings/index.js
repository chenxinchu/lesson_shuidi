var gcdOfStrings = function (str1, str2) {
	if (str1 + str2 !== str2 + str1) return ''
	const gcd = (a, b) => (0 === b ? a : gcd(b, a % b))
	return str1.substring(0, gcd(str1.length, str2.length))
};
var str1 = "ab"
var str2 = "ababab"
console.log(gcdOfStrings(str1, str2));
