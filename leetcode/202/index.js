/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let map = new Map()
  while(n != 1){
      if( map.has(n)) return false
      map.set(n, true)
      n = String(n).split('').map(item => item**2).reduce((a,b)=>a+b)
  }
  return true
};