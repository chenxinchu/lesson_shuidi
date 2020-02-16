var fourSum = function (nums, target) {
  let len = nums.length;
  var res = [];
  if (len < 4) return res; // 数组长度小于4
  nums = nums.sort((a, b) => a - b); // 排序

  for (let i = 0; i < len - 3; i++) {
    // 去重
    while (i > 0 && nums[i] == nums[i - 1]) i++;
    // 优化
    let min = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3];
    if (min > target) continue;
    let max = nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3];
    if (max < target) continue;

    for (let j = i + 1; j < len - 2; j++) {
      // 去重
      while (j > i + 1 && nums[j] == nums[j - 1]) j++;
      // 优化
      min = nums[i] + nums[j] + nums[j + 1] + nums[j + 2];
      if (min > target) continue;
      max = nums[i] + nums[j] + nums[len - 1] + nums[len - 2];
      if (max < target) continue;

      let L = j + 1, R = len - 1;
      while (L < R) {
        let sum = nums[i] + nums[j] + nums[L] + nums[R];
        if (sum == target) {
          res.push([nums[i], nums[j], nums[L], nums[R]])
          L++;
          while (L<R && nums[L] == nums[L - 1]) L++;
          R--;
          while (R > L && nums[R] == nums[R + 1]) R--;
        } else if (sum < target) {
          L++;
        } else {
          R--;
        }
      }
    }
  }
  return res;
};
console.log(fourSum([1, 0, -1, 0, -2, 2],0));
