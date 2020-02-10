var maxArea = function (height) {
  if (height.length == 0 || height.length == 1) return 0;
  var max = 0;
  var tempMax = 0;
  for (var i = 0; i < height.length; i++) {
    for (var j = i + 1; j < height.length; j++) {
      tempMax=(j-i)*Math.min(height[i],height[j]);
      max = max>tempMax?max:tempMax;
    }
  }
  return max;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
