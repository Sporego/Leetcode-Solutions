function isPowerOfFour(num) {
  return (Math.log(num) / Math.log(4)) % 1 === 0;
}

console.log(isPowerOfFour(2));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(4));
console.log(isPowerOfFour(-4));
