/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let maximum = -Infinity;
	let maximumBridge = 0;
	for (let i = 0; i < nums.length; i++) {
		if (maximum < nums[i] + maximumBridge) {
			maximum = nums[i] + maximumBridge;
		}

		maximumBridge =
			maximumBridge + nums[i] > 0 ? (maximumBridge += nums[i]) : 0;
	}
	return maximum;
};

