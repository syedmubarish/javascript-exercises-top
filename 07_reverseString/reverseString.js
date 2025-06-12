const reverseString = function(str) {
    const arr = str.split("");
  arr.reverse()
  let newStr = arr.join("");
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
