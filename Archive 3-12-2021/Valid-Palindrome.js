var isPalindrome = function (s) {
  const charArray = Array.from(s.replace(/[^a-zA-Z0-9]/gim, "").toLowerCase());
  const reverseCharArray = Array.from(charArray);
  reverseCharArray.reverse();
  console.log(charArray);
  console.log(reverseCharArray);
  if (charArray.join() == reverseCharArray.join()) {
    return true;
  } else {
    return false;
  }
};

let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));
