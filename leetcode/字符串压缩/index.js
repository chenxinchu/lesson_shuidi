var compressString = function (S) {
	if (S.length <= 0) return ""
	var count = 0, temp = S[0]
	var ans = ""
	for (let i = 0; i < S.length+1; i++) {
		if (S[i] === temp) {
			count += 1
		} else {
			ans += S[i - 1] + count
			temp = S[i]
			count = 1
		}
	}
	return ans.length < S.length ? ans : S
};

console.log(compressString("aabcccccaaa"));
