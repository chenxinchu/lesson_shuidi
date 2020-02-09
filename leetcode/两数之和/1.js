var twoSum = function(nums,target){
  for(var i=0;i<nums.length;i++){
    var dif = target-nums[i];
    for(var j=i+1;j<nums.length;j++){
      if(nums[j]==dif){
        return [i,j];
      }
    }
  }
}
console.log(twoSum([2, 7, 11, 15],9));