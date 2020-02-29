var generateParenthesis = function(n) {
  let res = [];
  function generate(left, right, result){
      if(left == n && right == n){
          res.push(result);
          // return;
      }
      if(left < n){
          generate(left + 1, right, result + "(" );
      }
      if(left > right && right < n) generate(left, right + 1, result + ")");
  }
  generate(0, 0, "");
  return res;
};
console.log(generateParenthesis(3));
