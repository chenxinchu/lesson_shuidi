
var minIncrementForUnique = function (A) {
	let count = 0
	let map = new Map()
	for (let num of A) {
		while (map.has(num)) {
			count++
			num++
		}
		map.set(num, true)
	}
	return count
}

console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]))

