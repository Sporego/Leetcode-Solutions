// Hirsch Number given an array with each space in the array represents a paper and each number represents the amount of citations for a given paper.

function hirschNumber(numberArray) {
  let hirschIndex = 0;
  for (let i = 0; i < numberArray.length; i++) {
    let count = 0;
    let citationsTreshold = hirschIndex + 1;
    for (let arrayCheck = 0; arrayCheck < numberArray.length; arrayCheck++) {
      if (citationsTreshold <= numberArray[arrayCheck]) {
        count++;
      }
      if (numberArray.length == arrayCheck + 1) {
        if (count >= citationsTreshold) {
          hirschIndex++;
        }
      }
    }
  }
  return hirschIndex;
}
