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

function deleteDigit(number) {
  const array =  String(number)
    .split('')
    .map(num => Number(num));
  const maxNumber = array.reduce((acc, curr, index) => {
    const tempArray = [...array];
    tempArray.splice(index, 1);
    const candidate = +tempArray.join('');

    return candidate > acc ? candidate : acc;
  }, 0);


  return maxNumber;
}

module.exports = {
  deleteDigit
};
