/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let count = 0;

  arr1.forEach((letter, index) => {
    const arr2Index = arr2.indexOf(letter);
    if (arr2Index !== -1) {
      count += 1;
      arr1[index] = null;
      arr2[arr2Index] = null;
    }
  });

  return count;
}

module.exports = {
  getCommonCharacterCount
};