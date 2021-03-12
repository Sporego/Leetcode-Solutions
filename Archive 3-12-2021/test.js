let nums1 = [2, 7, 11, 15];
let target1 = 9;

var twoSum = function (nums, target) {
  for (var n = 0; n > nums.length; n++) {
    let firstOfPair = nums[n];
    console.log(firstOfPair);
    let found = false;
    for (var i = n; i > nums.length; i++) {
      let secondOfPair = nums[i + 1];
      if (firstOfPair + secondOfPair == target) {
        indexTwo = i + 1;
        found = true;
        return indexTwo;
      } else {
      }
    }
    if ((found = true)) {
      return [n, indexTwo];
    }
  }
};

let x = twoSum(nums1, target1);
console.log(x);
