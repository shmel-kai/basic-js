/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */

const HEX_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function isMAC48Address(macString) {
  let isCorrect = true;
  const allChars = macString.split('');
  const correctDashCount = allChars.filter(elem => elem === '-').length === 5;
  const chars = macString.split('-');
  isCorrect = correctDashCount && chars.every(elem => elem.length === 2);

  allChars.filter(item => item !== '-').forEach(element => {
    if (Number.isNaN(Number(element)) && !HEX_LETTERS.includes(element)) {
      isCorrect = false;
    }
  });

  return isCorrect;
}
module.exports = {
  isMAC48Address
};
