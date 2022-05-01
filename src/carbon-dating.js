const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN_2 = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  const sampleActivityNumber = Number(sampleActivity);

  if (sampleActivityNumber > 0 && sampleActivityNumber < MODERN_ACTIVITY) {
    const k = LN_2 / HALF_LIFE_PERIOD;
    const t = Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k;

    return Math.ceil(t);
  }

  return false;
}

module.exports = {
  dateSample
};
