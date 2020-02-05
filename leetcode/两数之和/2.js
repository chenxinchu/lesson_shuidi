var twoSum = function(nums,target) {
  var temp = [];
  for(var i=0;i<nums.length;i++){
      var dif = target - nums[i];
      if(temp[dif] != undefined){
          return [temp[dif],i];
      }
      temp[nums[i]] = i;
  }
};
console.log(twoSum([2, 7, 11, 15],9));