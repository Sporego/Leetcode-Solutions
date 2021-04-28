/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
    return /^10*$/.test(n.toString(3));
};