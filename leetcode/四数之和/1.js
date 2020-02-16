var fourSum = function (nums, target) {
  let len = nums.length;
  var res = [];
  if (len < 4) return res; // 数组长度小于4
  nums = nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len - 3; i++) {
    for (let j = i + 1; j < len - 2; j++) {
      let L = j + 1, R = len - 1;
      while (R > L) {
        sum = nums[i] + nums[j] + nums[L] + nums[R];
        if (sum == target) {
          res.push([nums[i], nums[j], nums[L], nums[R]])
        }
        if(sum>target){
          R--;
        }else{
          L++;
        }
      }
    }
  }
  return res;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
