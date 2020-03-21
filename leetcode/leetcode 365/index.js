var canMeasureWater = function (x, y, z) {
	if (x + y < z) return false
	if (x === 0 || y === 0) return (z === 0) || (x + y === z)
	return z % gcd(x, y)===0
}
var gcd = function (x, y) {
	if(y===0) return x
	return gcd(y,x%y)
}
console.log(canMeasureWater(3,5,4));
