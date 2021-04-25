/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

var fullJustify = function (words, maxWidth) {
  let current = 0;
  let result = [];

  function assembleLine() {
    //Initialization
    const wordArray = [];
    wordArray.push(words[current]);
    current++;

    //Reducer to find total chars in wordArray
    const charSum = (accumulator, currentValue) =>
      accumulator + currentValue.length;
    while (current < words.length) {
      if (
        wordArray.reduce(charSum, 0) +
          words[current].length +
          wordArray.length +
          1 <=
        maxWidth
      ) {
        wordArray.push(words[current]);
        current++;
      } else {
        break;
      }
    }
    //Build Line
    let spaceBase =
      ((maxWidth - wordArray.reduce(charSum, 0)) / (wordArray.length - 1)) >> 0;
    let spaceRemainder =
      (maxWidth - wordArray.reduce(charSum, 0)) % (wordArray.length - 1);

    if (wordArray.length === 1) {
      spaceBase = maxWidth - wordArray.reduce(charSum, 0);
      spaceRemainder = 0;
    }

    if (current === words.length) {
      wordArray.forEach((currentValue, index, array) => {
        if (index === array.length - 1) {
          console.log(maxWidth - wordArray.reduce(charSum, 0));
          array[index] =
            "" +
            currentValue +
            " ".repeat(maxWidth - wordArray.reduce(charSum, 0));
        } else {
          array[index] = "" + currentValue + " ";
        }
      });
    } else {
      wordArray.forEach((currentValue, index, array) => {
        if (array.length > 1 && index === array.length - 1) return;
        array[index] =
          "" +
          currentValue +
          " ".repeat(spaceBase + (index < spaceRemainder ? 1 : 0));
      });
    }

    result.push(wordArray.join("")); //
  }

  while (current < words.length) {
    assembleLine();
  }

  return result;
};

console.log(
  fullJustify(
    [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do",
    ],
    20
  )
);
