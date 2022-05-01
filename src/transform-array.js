function transform(arr) {
  if (!(arr instanceof Array)) {
    throw Error ("'arr' parameter must be an instance of the Array!");
  }

  return arr.map((item, index, array) => {
    if (item === '--double-next') {
      return array[index + 1];
    }
    if (array[index - 1] === '--discard-next') {
        return '--discard-next';
    }
    if (array[index + 1] === '--discard-prev') {
      return '--discard-prev';
    }
    if (item === '--double-prev' && arr[index - 2] !== '--discard-next') {
      return array[index - 1];
    }
    return item;
  }).filter((item) => {
    if ((item === '--discard-next') || (item === '--discard-prev') || !item || (item === '--double-prev')){
       return false;
    } else return true;
  });
}

module.exports = {
  transform
};
