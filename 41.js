function firstMissingPositive(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        let currIndex = nums[i]-1;
        if (i == currIndex || nums[i] == nums[currIndex]) continue;
        if (currIndex >= 0 && currIndex <= nums.length - 1) {
            [nums[i], nums[currIndex]] = [nums[currIndex], nums[i]];
            i--;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i+1 == nums[i]) continue;
        else return i+1;
    }
    
    return nums.length + 1;
}