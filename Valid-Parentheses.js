// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */

function returnCloser(opener) {
  switch (opener) {
    case "(":
      return ")";
    case "{":
      return "}";
    case "[":
      return "]";
  }
}

var isValid = function isValid(s) {
  let history = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s.charAt(i);

    if (curr === "(" || curr === "{" || curr === "[") {
      history.push(returnCloser(curr));
    } else if (curr === ")" || curr === "}" || curr === "]") {
      let last = history.pop();
      if (last !== curr) {
        return false;
      }
    }
  }

  if (history.length === 0) {
    return true;
  } else {
    return false;
  }
};
