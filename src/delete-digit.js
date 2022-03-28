const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = String(n);
  let result = [];
  for (let i = 0; i < n.length; i++) {
    result.push(+n.replace(n[i], ''));
  }
  result = result.sort((a, b) => b - a);
  return result[0];
}

module.exports = {
  deleteDigit
};
