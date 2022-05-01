/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  matrix.forEach((array, i) => {
    result[i] = [];
    
    array.forEach((elem, j) => {
      let count = 0;

      if (array[j - 1] || array[j + 1]) {
        count++;
      };
      if (Array.isArray(matrix[i - 1]) && (matrix[i - 1][j] || matrix[i - 1][j + 1] || matrix[i - 1][j - 1])) {
        count++;
      }
      if (Array.isArray(matrix[i + 1]) && (matrix[i + 1][j] || matrix[i + 1][j + 1] || matrix[i + 1][j - 1])) {
        count++;
      }

      result[i][j] = count;
    })
  })

  return result;
}

module.exports = {
  minesweeper
};
