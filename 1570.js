/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
 class SparseVector {
    constructor(data) {
      this.data = data;
    }
  
    dotProduct(vec) {
      const { data } = vec;
  
      return this.data.reduce((prev, current, i) => prev += current * vec[i], 0);
    }
  }
