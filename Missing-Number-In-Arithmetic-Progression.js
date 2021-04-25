/**
 * @param {number[]} arr
 * @return {number}
 */

function missingNumber(arr) {
  let diff = (arr[arr.length - 1] - arr[0]) / arr.length;
  if (diff === 0) return arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + diff !== arr[i]) return arr[i - 1] + diff;
  }
}
