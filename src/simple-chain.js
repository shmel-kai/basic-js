const chainMaker = {
  stack: [],
  getLength() {
    return this.stack.length;
  },
  addLink(value) {

    this.stack.push(String(value));

    return this;
  },
  removeLink(position) {
    const index = position - 1;
    if(!this.stack[index]) {
      this.stack = [];
      throw Error('You can\'t remove incorrect link!');
    }

    this.stack.splice(index, 1);

    return this;
  },
  reverseChain() {
    this.stack.reverse();

    return this;
  },
  finishChain() {
    const result = this.stack.reduce((acc, elem, index) => {
      if (index === 0) {
        return `( ${elem} )`;
      }
      return `${acc}~~( ${elem} )`;
    }, '');

    this.stack = [];

    return result;
  }
};

module.exports = {
  chainMaker
};
