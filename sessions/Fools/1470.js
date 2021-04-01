/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    for (let i = 0; i < 2*n; i+=2){
    nums.splice(i + 1,0,nums[n+i])
    }
    nums.length = 2*n //oringally used `nums.splice(2n,n)
    return nums
};