var minIncrementForUnique = function (A) {
	A = A.sort((a, b) => a - b)
	// console.log(A);
	var count = 0
	for (let i = 1; i < A.length; i++) {
		if (A[i] <= A[i - 1]) {
			let n = A[i - 1] + 1 - A[i]
			A[i] += n
			count += n
		}
	}
	return count
};

console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]))

