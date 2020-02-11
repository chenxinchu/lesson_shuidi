var threeSum = function(nums) {
  // nums = nums.sort((a, b) => a - b);
  let res=[];
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      for(let k=j+1;k<nums.length;k++){
        if(nums[i]+nums[j]+nums[k]==0){
          res.push([nums[i],nums[j],nums[k]])
        }
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

