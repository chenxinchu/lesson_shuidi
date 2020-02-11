var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b); // 排序
  // console.log(nums);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > 0 && nums[j] == nums[j - 1] && j - 1 != i) continue;
      for (let k = j + 1; k < nums.length; k++) {
        if (k > 0 && nums[k] == nums[k - 1] && k - 1 != j) continue; 
        if (nums[i] + nums[j] + nums[k] == 0) {
          res.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
 
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

