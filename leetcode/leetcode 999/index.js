var numRookCaptures = function (board) {
	let count = 0, rx = 0, ry = 0  // count用于计数，rx,ry代表车的坐标
	const dx = [0, 1, 0, -1]  // x轴不变，y轴移动;  y轴不变，x轴移动  
	const dy = [1, 0, -1, 0]  // 代表了车的上下左右移动

	// 找出车的坐标
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] == 'R') {
				rx = i, ry = j
				break
			}
		}
	}

	// 车开始上下左右移动
	for (let i = 0; i < 4; i++) {  // 上下左右
		for (let step = 0; ; step++) {  // 移动步数递增
			const tx = rx + step * dx[i]
			const ty = ry + step * dy[i]
			if (tx < 0 || tx >= 8 || ty < 0 || ty >= 8 || board[tx][ty] == 'B') break;  // 越界或者碰到象
			if (board[tx][ty] == 'p') {
				count++
				break
			}
		}
	}
	return count 
}

console.log(numRookCaptures([
	[".",".",".",".",".",".",".","."],
	[".",".",".","p",".",".",".","."],
	[".",".",".","p",".",".",".","."],
	["p","p",".","R",".","p","B","."],
	[".",".",".",".",".",".",".","."],
	[".",".",".","B",".",".",".","."],
	[".",".",".","p",".",".",".","."],
	[".",".",".",".",".",".",".","."]
]));
