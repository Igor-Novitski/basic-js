const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let self = this;
    let count = 1;
    let resultCount = 1;
    arr.forEach(function (item) {
      count = 1;
      if (Array.isArray(item)) count += self.calculateDepth(item);
      if (count > resultCount) resultCount = count;
    });
    return resultCount;
  }
}


module.exports = {
  DepthCalculator
};
