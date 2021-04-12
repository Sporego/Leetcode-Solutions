/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  if (matrix.isArray === false) return; // Guard Statement
  //     Imagine Euclidean Plane Quadrant 1
  // "Spiral Order is counterclockwise spiraled version of matrix"
  let xRange = [0, matrix[0].length-1]; // [min,max]
  let yRange = [0, matrix.length-1]; // index 0 is min ; index 1 is max
  const returned = [];

  while (xRange[0] <= xRange[1] && yRange[0] <= yRange[1]) {
    // West to East AKA SW to SE
    let minWE = xRange[0];
    let maxWE = xRange[1];
    for (let i = minWE; i <= maxWE; i++) {
      returned.push(matrix[yRange[0]][i]);
    }

    // South to North AKA SE to NE
    let minSN = yRange[0] + 1;
    let maxSN = yRange[1];
    for (let i = minSN; i <= maxSN; i++) {
      returned.push(matrix[i][xRange[1]]);
    }

    if (xRange[0] < xRange[1] && yRange[0] < yRange[1]) {
      // East to West AKA NE to NW
      let minEW = xRange[0];
      let maxEW = xRange[1] - 1;
      for (let i = maxEW; i >= minEW; i--) {
        returned.push(matrix[yRange[1]][i]);
      }
      // North to South AKA NW to SW
      let minNS = yRange[0] + 1;
      let maxNS = yRange[1] - 1;
      for (let i = maxNS; i >= minNS; i--) {
        returned.push(matrix[i][xRange[0]]);
      }
    }
    xRange[0]++;
    xRange[1]--;
    yRange[0]++;
    yRange[1]--;
  }
  return returned;
}