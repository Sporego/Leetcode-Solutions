// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

var isAlienSorted = function (words, order) {
  // Create `Map` with order of letters indexed
  let alphabet = new Map();
  let index = 0;

  for (let letter of order) {
    alphabet.set(letter, index);
    index++;
  }
  //

  for (let i = 0; i < words.length - 1; i++) {
    if (compare(words[i], words[i + 1], alphabet) !== 1) {
      continue;
    }

    return false;
  }

  return true;
};

function compare(a, b, alphabet) {
  const aLength = a.length;
  const bLength = b.length;
  const minLength = Math.min(aLength, bLength);

  for (let i = 0; i < minLength; i++) {
    const aOrder = alphabet.get(a[i]);
    const bOrder = alphabet.get(b[i]);

    if (aOrder === bOrder) {
      continue;
    }

    if (aOrder < bOrder) {
      return -1;
    }

    return 1;
  }

  if (aLength === bLength) {
    return 0;
  }

  return aLength < bLength ? -1 : 1;
}
