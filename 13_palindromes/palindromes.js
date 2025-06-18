const palindromes = function (string) {
  const alphabetsNumbers = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  const filteredStringArr = string
    .split("")
    .filter((value) => alphabetsNumbers.includes(value));

    const filteredString = filteredStringArr.join("").toUpperCase()
    const reversedString = filteredStringArr.reverse().join("").toUpperCase()

    if(filteredString==reversedString)return true
    return false
};

// Do not edit below this line
module.exports = palindromes;
