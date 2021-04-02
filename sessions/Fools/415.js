/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
	let returned = '';
	let carry = 0;
	let num1Point = num1.length - 1;
	let num2Point = num2.length - 1;
	const numDic = {
		0: 0,
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		6: 6,
		7: 7,
		8: 8,
		9: 9,
		undefined: 0,
	};
	while (num1Point > -1 || num2Point > -1) {
		sum = (
			numDic[num1[num1Point]] +
			numDic[num2[num2Point]] +
			numDic[carry]
		).toString();
		if (sum.length > 1) {
			carry = sum[0];
			returned = sum[1].concat(returned);
		} else {
			carry = 0;
			returned = sum[0].concat(returned);
		}

		num1Point--;
		num2Point--;
	}

	if (carry !== 0) {
		returned = carry.concat(returned);
	}

	return returned;
};
