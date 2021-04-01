/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let i = 0
    let sum = 0
    while (i < nums.length) {
        sum += nums[i]
        nums.splice(i, 1, sum)
        i++
    }
    return nums
};