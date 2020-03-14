var lengthOfLIS = function (nums) {
	if (nums.length < 2) return nums.length
	var dp = new Array(nums.length).fill(1)
	var max = 0
	for (var i = 0; i < nums.length; i++) {
		for (var j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
		max = Math.max(max, dp[i])
	}
	return max
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
