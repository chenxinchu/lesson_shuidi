var waysToChange = function (n) {
  if (n === 0) return 1;

  const dp = [1].concat(Array(n).fill(0));
  let coins = [1, 5, 10, 25];
  for (let j = 0; j < coins.length; j++) {
    for (let i = 1; i < n + 1; i++) {
      if (i - coins[j] >= 0) {
        dp[i] = (dp[i] + dp[i - coins[j]])%(le9+7);
      }
    }
  }
  return dp[dp.length - 1];
};

console.log(waysToChange(5))