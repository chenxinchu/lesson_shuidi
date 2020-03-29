var maxDistance = function (grid) {
	var lands = [], ocean = []
	var max = -1
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) {
				lands.push([i, j])
			} else {
				ocean.push([i, j])
			}
		}
	}
	for (let [ox, oy] of ocean) {
		let min = Number.MAX_VALUE
		for (let [lx, ly] of lands) {
			let per_min = Math.abs(ox - lx) + Math.abs(oy - ly)
			if (per_min < min) {
				min = per_min
			}
		}
		if (max < min && min != Number.MAX_VALUE) {
			max = min
		}
	}
	return max
}
console.log(maxDistance([[0, 0, 0], [0, 0, 0], [0, 0, 0]]));
