/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
	nums.reduce((a, c, i, arr) => (arr[i] += a));
	return nums;
}
