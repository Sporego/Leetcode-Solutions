/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let digitsArray = digits.split("");

  const phoneDictionary = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  digitsArray = digitsArray.map((x) => phoneDictionary[x]);
  console.log(digitsArray);

  let initialCount = digitsArray.length;
  for (let i = 0; i < initialCount.length; i++) {
    for (let j = 0; j < digitsArray[i].length; j++) {
      digitsArray.push(digitsArray[i].charAt(j));
    }
    initialCount = digitsArray.length;
  }
};

console.log(letterCombinations("2652"));
