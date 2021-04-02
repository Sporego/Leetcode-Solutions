/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	const isNegative = x < 0;
	let num = Math.abs(x);
	let returned = 0;
	while (num > 0) {
		returned *= 10;
		returned += num % 10;
		num = Math.floor(num / 10);
	}
	if (returned > 2 ** 31) return 0;
	return isNegative ? -1 * returned : returned;
};
