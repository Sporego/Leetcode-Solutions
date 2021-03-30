/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let total = 0;
  let leftMax = 0;
  let rightMax = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] > leftMax
        ? (leftMax = height[left])
        : (total += leftMax - height[left]);
      left++;
    } else {
      height[right] > rightMax
        ? (rightMax = height[right])
        : (total += rightMax - height[right]);
      right--;
    }
  }
  return total;
};
