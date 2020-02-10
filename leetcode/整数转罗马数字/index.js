var intToRoman = function (num) {
  
  if (num < 0 || num > 3999) return;

  var resultStr = "";
  let numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let strNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  for (let i = 0; i < numArr.length; i++) {
    while (num >= numArr[i]) {
      resultStr += strNum[i];
      num -= numArr[i];
    }
  }
  return resultStr;
};
console.log(intToRoman(1994));
