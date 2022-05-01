function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date)[0] === 'toString') {
    throw Error("Invalid date!");
  };

  const month = date.getMonth();

  if (month >= 2 && month <= 4 ){
    return 'spring';
  }

  if (month >= 5 && month <= 7 ){
    return 'summer';
  }

  if (month >= 8 && month <= 10 ){
    return 'autumn';
  }

  if (month >= 11 || month <= 1 ){
    return 'winter';
  }
};

module.exports = {
  getSeason
};
