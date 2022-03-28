const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additionNew;
  if (options.addition === false) options.addition = 'false';
  if (options.addition === null) options.addition = 'null';
  if (options.addition) additionNew = options.addition;
  if (!options.additionSeparator) options.additionSeparator = '|';
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    options.addition += options.additionSeparator + additionNew;
  }
  let result = str;
  (options.addition) ? result = str + options.addition : options.addition = '';
  if (!options.separator) options.separator = '+';
  for (let i = 1; i < options.repeatTimes; i++) {
    result += options.separator + str + options.addition;
  }
  return result;
}

module.exports = {
  repeater
};
