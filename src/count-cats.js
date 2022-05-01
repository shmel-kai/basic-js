function countCats(array) {
  let result = 0;
  array.flat().map(element => {
      if (element === '^^'){
          result += 1;
      }
  });

  return result;
}

module.exports = {
  countCats
};
