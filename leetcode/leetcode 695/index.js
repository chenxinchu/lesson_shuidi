var maxAreaOfIsland = function (grid) {
	var x = grid.length, y = grid[0].length
	var max = 0
	for (var i = 0; i < x; i++) {
		for (var j = 0; j < y; j++) {
			if (grid[i][j] == 1) {
				max = Math.max(max, countArea(grid, i, j, x, y))
			}
		}
	}
	return max
};

var countArea = function (grid, i, j, x, y) {
	if (i < 0 || i >= x || j < 0 || j >= y || grid[i][j] == 0) return 0
	var count = 1
	grid[i][j] = 0
	count += countArea(grid, i + 1, j, x, y) // 下
	count += countArea(grid, i - 1, j, x, y) // 上
	count += countArea(grid, i, j + 1, x, y) // 右 
	count += countArea(grid, i, j - 1, x, y) // 左 
	return count
}

console.log(maxAreaOfIsland([
	[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
	[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
	[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]));
