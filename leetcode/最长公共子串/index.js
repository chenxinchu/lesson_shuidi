var longestCommonPrefix = function (strs) {
  var result = '';
  if (!strs.length) {
      return result;
  }

  for (var i = 0; i < strs[0].length; i++) {
      for (var j = 1; j < strs.length; j++) {
          if (strs[0][i] != strs[j][i]) {
              return result;
          }
      }
      result += strs[0][i];
  }
  return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
