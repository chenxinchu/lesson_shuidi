var maxArea = function (height) {
  if (height.length == 0 || height.length == 1) return 0;
  var left = 0, right = height.length - 1;
  var tempMax = 0, max = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      tempMax = (right - left) * height[left];
      left++;
    } else {
      tempMax = (right - left) * height[right];
      right--;
    }
    max = max > tempMax ? max : tempMax;
  }
  return max;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
