const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [];
  let newArr = [];
  let i = 0;
  arr.forEach(function (item) {
    if (item != (-1)) newArr.push(item);
  });
  newArr.sort((a, b) => a - b);
  arr.forEach(function (item) {
    if (item === (-1)) {
      result.push(item);
    } else {
      result.push(newArr[i]);
      i++;
    }
  });
  return result;
}

module.exports = {
  sortByHeight
};
