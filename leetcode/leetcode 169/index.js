var majorityElement = function(nums) {
	var count=0
	var maj = nums[0]
	for(var i=0;i<nums.length;i++){
		if(maj==nums[i]){
			count++
		}else{
			count--;
			if(count==0){
				maj=nums[i+1]
			}
		}
	}
	return maj
}
console.log(majorityElement([2,3,3]))

