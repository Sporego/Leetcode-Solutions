/**
 * @param {number[]} height
 * @return {number}
 */
class Prop {
  constructor() {
    this.array = [1];
    this.wasFill = true;
  }
}

var trap = function (height) {
  const twoDMap = {};
  let maximum = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > maximum) {
      maximum = height[i];
    } else {
      maximum = maximum;
    }

    for (let j = maximum; j > 0; j--) {
      let isFill = j <= height[i];
      if (twoDMap[j] === undefined) {
        twoDMap[j] = new Prop();
      } else {
        if (twoDMap[j].wasFill === isFill) {
          twoDMap[j].array.push(twoDMap[j].array.pop() + 1);
        } else {
          twoDMap[j].array.push(1);
        }
      }
      twoDMap[j].wasFill = isFill;
    }
  }

  let areaTotal = 0;
  for (const prop in twoDMap) {
    let calcArray = twoDMap[prop].array;
    for (let i = 1; i < calcArray.length - 1; i += 2) {
      if (calcArray.length < 3) {
        continue;
      }

      areaTotal += calcArray[i];
    }
  }
  return areaTotal;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
