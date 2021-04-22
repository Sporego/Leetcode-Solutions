/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transposeMap = function (matrix) {
    return matrix[0].map((value,index) => matrix.map(row => row[index]))
};

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function (matrix) {
    let returned = []
   for (let i = 0; i < matrix.length;i++) {
       for (let j= 0; j <matrix[i].length;j++) {
           if (returned[j] == undefined) returned.push([])
           returned[j].push(matrix[i][j])
       }
   }
   return returned
};