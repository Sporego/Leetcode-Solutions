/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  const sentence1Array = sentence1.split(" ");
  const sentence2Array = sentence2.split(" ");
  const shorter =
    sentence1Array.length < sentence2Array.length
      ? sentence1Array
      : sentence2Array;
  const longer =
    sentence1Array.length > sentence2Array.length
      ? sentence1Array
      : sentence2Array;

  const indiciesShorter = [];
  const indiciesLonger = [];

  console.log(shorter[0]);
  for (let i = 0; i < shorter.length; i++) {
    if (longer.includes(shorter[i])) {
      indiciesShorter.push(i);
    }
  }

  for (let i = 0; i < longer.length; i++) {
    if (shorter.includes(longer[i])) {
      indiciesLonger.push(i);
    }
  }

  if (indiciesShorter.length == 0 && indiciesLonger.length == 0) {
    return false;
  }

  if (indiciesShorter.length === shorter.length) {
    let last = indiciesShorter[0];
    let skips = 0;

    if (indiciesLonger[0] !== 0) {
      skips++;
    }

    if (indiciesLonger[0] !== 0) {
      skips++;
    }

    if (indiciesLonger[indiciesLonger.length - 1] !== longer.length - 1) {
      skips++;
    }

    for (let i = 1; i < indiciesShorter.length; i++) {
      if (last + 1 !== indiciesShorter[i]) {
        skips++;
      }
      last = indiciesShorter[i];
    }
    return skips < 2;
  }

  return false;
};

console.log(areSentencesSimilar("Luky", "Lucccky"));
