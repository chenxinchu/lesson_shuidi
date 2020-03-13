var majorityElement = function(nums) {
	nums.sort((a,b)=>a-b)
	// console.log(nums);
	return nums[Math.floor(nums.length/2)]
}
console.log(majorityElement([2,2,1,1,1,2,2]))
