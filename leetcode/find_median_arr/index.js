
var findMedianSortedArrays = function (nums1, nums2) {
  for (i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i])
  }
  nums1 = nums1.sort((a, b) => {
    return b - a;
  });//排序
  if (nums1.length % 2 == 0) {
    return (nums1[nums1.length / 2] + nums1[nums1.length / 2 - 1]) / 2 //中位数
  }
  else {
    return nums1[(nums1.length - 1) / 2]
  }
}
console.log(findMedianSortedArrays([1, 3], [2]));
