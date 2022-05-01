function repeater(string, object) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = object;

  const addArr = [];
  for(let i = 1; i < additionRepeatTimes; i++){
    addArr.push(additionSeparator);
    addArr.push(String(addition));
  }
  const arr = new Array(repeatTimes);
  arr.fill([String(string), `${addition}`, addArr.join(''), separator]);
  const flat = arr.flat();
  flat.pop();

  return flat.join('');
}

module.exports = {
  repeater
};
