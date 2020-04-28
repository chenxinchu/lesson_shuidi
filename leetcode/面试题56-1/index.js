var singleNumbers = function(nums) {
  const map = {}
  const result = []
  for(let i of nums){
      map[i] = (map[i] || 0) +1
  }
  for(let key in map){
      if(map[key] == 1){
          result.push(key)
      }
  }
  return result
};
console.log(singleNumbers([1,2,10,4,1,4,3,3]));