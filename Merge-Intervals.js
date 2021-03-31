/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

function merge(intervals) {
  intervals.sort((arr1, arr2) => arr1[0] - arr2[0]);
  let i = 0;
  while (i < intervals.length) {
    let first = intervals[i];
    let second = intervals[i + 1];
    let mergeArr = first; //Saves 2 MB of Memory o.o
    if (second && first[1] >= second[0]) {
      mergeArr[0] = first[0] <= second[0] ? first[0] : second[0];
      mergeArr[1] = first[1] <= second[1] ? second[1] : first[1];
      intervals.splice(i, 2, mergeArr);
    } else {
      i++;
    }
  }
  return intervals;
}
