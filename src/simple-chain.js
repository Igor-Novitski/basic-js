const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.split("~~").length;
  },
  addLink(value) {
    if (this.chain === '') {
      this.chain = `( ${value} )`;
    } else {
      this.chain += `~~( ${value} )`;
    }
    return this
  },
  removeLink(position) {
    if (typeof (position) != 'number' || position > this.getLength() || position < 1 || Math.floor(position) != position) {
      this.chain = '';
      throw new Error("You can't remove incorrect link!");
    }
    let arr = this.chain.split("~~");
    arr.splice((position - 1), 1);
    this.chain = arr.join("~~");
    return this
  },
  reverseChain() {
    let arrReverse = this.chain.split("~~").reverse();
    this.chain = arrReverse.join("~~");
    return this
  },
  finishChain() {
    let finishChain = this.chain;
    this.chain = '';
    return finishChain;
  }
};

module.exports = {
  chainMaker
};
