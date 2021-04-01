/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
	let max = 0;
	for (let i = 0; i < accounts.length; i++) {
		let current = 0;
		for (let j = 0; j < accounts[i].length; j++) {
			current += accounts[i][j];
		}
		if (current > max) {
			max = current;
		}
	}
	return max;
};
