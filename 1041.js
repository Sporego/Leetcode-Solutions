/**
 * @param {string} instructions
 * @return {boolean}
 */

function isRobotBounded(instructions) {
  const historyNESW = [0, 0, 0, 0]; // index 0 is North; index 1 is East; index 2 is South; index 3 is West;
  let currentDirection = 0;

  function iterate(instructions) {
    for (let i = 0; i < instructions.length; i++) {
      let input = instructions.charAt(i);
      if (input === "G") {
        historyNESW[currentDirection]++;
      }
      if (input === "L") {
        currentDirection--;
      }
      if (input === "R") {
        currentDirection++;
      }
      if (currentDirection === -1) {
        currentDirection = 3;
      }
      if (currentDirection === 4) {
        currentDirection = 0;
      }
    }
  }

  function check() {
    if (
      historyNESW[0] === historyNESW[2] &&
      historyNESW[1] === historyNESW[3]
    ) {
      return true;
    } else {
      return false;
    }
  }
  iterate(instructions);
  let result = check();
  if (result) {
    return true;
  }
  iterate(instructions);
  iterate(instructions);
  iterate(instructions);
  result = check();
  if (result) {
    return true;
  } else {
    return false;
  }
}

console.log(isRobotBounded("GL"));
