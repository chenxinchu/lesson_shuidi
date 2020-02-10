var isPalindrome = function(x) {
  str_x=x.toString();
  for(var i=0;i<str_x.length/2;i++){
    if(str_x[i]!=str_x[str_x.length-1-i]){
      return false
    }
  }
  return true
};
console.log(isPalindrome(-121));