/**
 * @param {character[][]} grid
 * @return {number}
 */

class Cords {
  constructor(y, x) {
    this.y = y;
    this.x = x;
  }
}

function numIslands(grid) {
  let totalIslands = 0;
  const queue = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "1") {
        totalIslands++;
        queue.push(new Cords(y, x));
        grid[y][x] = "0";

        while (queue.length > 0) {
          let yPrime = queue[0].y;
          let xPrime = queue[0].x;

          if (yPrime - 1 > -1) {
            if (grid[yPrime - 1][xPrime] === "1") {
              queue.push(new Cords(yPrime - 1, xPrime));
              grid[yPrime - 1][xPrime] = "0";
            }
          }

          if (yPrime + 1 < grid.length) {
            if (grid[yPrime + 1][xPrime] === "1") {
              queue.push(new Cords(yPrime + 1, xPrime));
              grid[yPrime + 1][xPrime] = "0";
            }
          }

          if (grid[yPrime][xPrime + 1] < grid[yPrime].length) {
            if (grid[yPrime][xPrime + 1] === "1") {
              queue.push(new Cords(yPrime, xPrime + 1));
              grid[yPrime][xPrime + 1] = "0";
            }
          }

          if (grid[yPrime][xPrime - 1] > -1) {
            if (grid[yPrime][xPrime - 1] === "1") {
              queue.push(new Cords(yPrime, xPrime - 1));
              grid[yPrime][xPrime - 1] = "0";
            }
          }

          queue.splice(0, 1);
        }
      }
    }
  }
  return totalIslands;
}
