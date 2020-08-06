/**
 * @param {number[]} nums
 * @return {number[]}
 */

// let nums = [4,3,2,7,8,2,3,1];
var findDuplicates = function(nums) {
    const output = [];
    const store = {};
    for (i=0; i < nums.length; i++) 
    {
        if (!(nums[i] in store)) 
        {
            store[nums[i]]++
        } else  
        {
            output.push(nums[i])
        }
    };
    return output
};
// console.log(findDuplicates(nums));