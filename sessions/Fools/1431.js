/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let max = candies.reduce((a,b)=>{return Math.max(a,b)})
    return candies.map(i => (i + extraCandies >= max))
};
