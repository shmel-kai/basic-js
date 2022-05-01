/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const allDomains = domains.reduce((acc, curr) => {
    const subDomains = curr.split('.');

    for (let i = 0; i < subDomains.length; i++) {
      const subDomain = subDomains.slice(i).join('.');
      
      if (!acc[subDomain]) {
        acc[subDomain] = 1;
      } else {
        acc[subDomain] += 1;
      }
    }

    return acc;
  }, {});

  const modifiedAllDomains = Object.entries(allDomains)
    .reduce((acc, curr) => {
      const domain = `.${curr[0].split('.').reverse().join('.')}`;

      acc[domain] = curr[1];

      return acc;
    }, {});

  return modifiedAllDomains;
}

module.exports = {
  getDNSStats
};
