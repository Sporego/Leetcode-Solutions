// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [3, 2, 4];
const target = 6;

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let firstNumber = nums[i];
    for (let x = 1 + i; x < nums.length; x++) {
      let secondNumber = nums[x];
      if (firstNumber + secondNumber == target) {
        return [i, x];
      }
    }
  }
}

console.log(twoSum(nums, target));
