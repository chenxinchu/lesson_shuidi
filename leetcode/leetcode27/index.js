var removeElement = function(nums, val) {
	var len = nums.length
	if(len==0) return 0
	for(var i=0;i<len;i++){
			if(nums[i]==val){
					nums.splice(i,1)
					i--
			}
	}
	return nums.length
};