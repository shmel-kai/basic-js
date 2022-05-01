/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  const arrayofDigits = String(number).split('').map(item => Number(item));

  let sum = arrayofDigits.reduce((acc, curr) => acc + curr, 0);

  while(sum >= 10) {
    const newArrayOfDigits = String(sum).split('').map(item => Number(item));
    
    sum = newArrayOfDigits.reduce((acc, curr) => acc + curr, 0);
  }

  return sum;
}

module.exports = {
  getSumOfDigits
};
