function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2**disksNumber - 1;
  const object = {
    turns : turns,
    seconds : Math.floor(turns / (turnsSpeed / 3600))
  };

  return object;
}

module.exports = {
  calculateHanoi
};
