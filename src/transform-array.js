const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let newArr = [];
  let position = [];
  let result = [];
  arr.forEach(function (item, index) {
    if (typeof item === 'string' && item[0] === '-') position.push(index);
    newArr.push(item);
  });
  if (newArr[0] === '--discard-prev' || newArr[0] === '--double-prev') newArr.shift();
  if (newArr[newArr.length - 1] === '--discard-next' || newArr[newArr.length - 1] === '--double-next') newArr.pop();
  for (let i = 0; i < position.length; i++) {
    if (arr[position[i]] === '--discard-next' && position[i] != (arr.length - 1)) newArr.splice(position[i], 2, 'xxx', 'xxx');
    if (arr[position[i]] === '--discard-prev' && position[i] != 0) newArr.splice((position[i] - 1), 2, 'xxx', 'xxx');
    if (arr[position[i]] === '--double-next' && position[i] != (arr.length - 1)) newArr.splice(position[i], 1, arr[position[i] + 1]);
    if (arr[position[i]] === '--double-prev' && position[i] != 0) newArr.splice(position[i], 1, newArr[position[i] - 1]);
  }
  newArr.forEach(function (item) {
    if (item != 'xxx') result.push(item);
  });
  return result;
}

module.exports = {
  transform
};
