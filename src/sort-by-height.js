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
  const minusOnePositions = [];

  arr.forEach((item, index) => {
    if (item === -1) {
      minusOnePositions.push(index);
    }
  });

  const filteredAndSoretedArray = arr
    .filter(item => item !== -1)
    .sort((a, b) => a - b);

  minusOnePositions.forEach(pos => {
    filteredAndSoretedArray.splice(pos, 0, -1);
  });

  return filteredAndSoretedArray;
}

module.exports = {
  sortByHeight
};
