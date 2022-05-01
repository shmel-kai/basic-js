/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrayString = [...str];

  const letters = arrayString.reduce((acc, elem, index) => {
      if(acc[acc.length - 1] && acc[acc.length - 1][1] === elem) {
        if(acc[acc.length - 1][0] === '') {
          acc[acc.length - 1][0] = 2;
        } else {
          acc[acc.length - 1][0] += 1;
        }
      } else {
          acc.push(['', elem]);
      }
      
      return acc;
  }, [])
  
  const result = letters.flat().join('');

  return result;
}

module.exports = {
  encodeLine
};
