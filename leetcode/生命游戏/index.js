var gameOfLife = function (board) {
	// 方向数组
	const idx = [0, 1, 0, -1, 1, -1, 1, -1]
	const jdx = [1, 0, -1, 0, 1, -1, -1, 1]
	// 复制数组
	const copyBoard = board.map(ary => { return [...ary] })

	// 遍历每个细胞
	for (let i = 0; i < copyBoard.length; i++) {
		for (let j = 0; j < copyBoard[i].length; j++) {
			// 统计周边活细胞
			let liveAmount = 0;
			// 八个方向走一遍
			for (let index = 0; index < 8; index++) {
				let x = i + idx[index]
				let y = j + jdx[index]
				// 不要越界
				if (x < 0 || y < 0 || x >= copyBoard.length || y >= copyBoard[i].length) continue
				// 活细胞liveAmount加一
				liveAmount += copyBoard[x][y] ? 1 : 0
			}
			// 判断细胞死活
			if (liveAmount < 2 || liveAmount > 3) {
				board[i][j] = 0
			} else if (liveAmount <= 3 && copyBoard[i][j] == 1) {
				board[i][j] = 1
			} else if (liveAmount == 3 && copyBoard[i][j] == 0) {
				board[i][j] = 1
			}
		}
	}
};