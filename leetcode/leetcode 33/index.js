var search = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		let mid = Math.floor((left + right)/2);
		if (nums[mid] == target) {
			return mid;
		}
		if (nums[mid] < nums[right]) {
			if (nums[mid] < target && nums[right] >= target) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		} else {
			if (nums[mid] > target && nums[left] <= target) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}
	}
	return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
