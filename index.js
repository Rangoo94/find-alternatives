const distance = require('fast-levenshtein').get;

/**
 * @param {*} input
 */
const toString = input => '' + input;

/**
 * @param {*} input
 */
const hash = input => toString(input).toLowerCase();

/**
 * @param {string} str1
 * @param {string} str2
 */
const isSimilar = (str1, str2) => distance(str1, str2) <= str1.length / 3 || str2.indexOf(str1) >= 0;

/**
 * 
 * @param {string} id
 * @param {string[]} options
 * @returns {string[]}
 */
function findAlternatives(id, options = []) {
  id = hash(id);
  return options.filter(nextId => isSimilar(hash(nextId), id));
}

module.exports = findAlternatives;
