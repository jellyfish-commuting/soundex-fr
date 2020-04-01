// Letter mapping for french phonetics, see https://fr.wikipedia.org/wiki/Soundex#Description
const codes = {
  B: 1, P: 1,
  C: 2, K: 2, Q: 2,
  D: 3, T: 3,
  L: 4,
  M: 5, N: 5,
  R: 6,
  G: 7, J: 7,
  X: 8, Z: 8, S: 8,
  F: 9, V: 9,
  A: 0, E: 0, I: 0, O: 0, U: 0,
};

//-------
// Soundex
//-------
module.exports = function (str, length = 4) {
  // Capitalize and remove accents
  const buffer = String(str).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();

  // Init result
  let result = buffer.charAt(0);
  let previous = codes[result];

  // Map all chars
  for(let i = 1; i < buffer.length; i += 1) {
    // Retrieve current values
    const letter = buffer.charAt(i);
    const code = codes[letter];

    // Ignore non letter character and apply the rule:
    // "two letters with the same number separated by 'h' or 'w' are coded as a single number"
    if (code === undefined || letter === 'H' || letter === 'W') {
      continue;
    }

    // Append code if different than previous
    if(code && code !== previous) {
      result += code;
    }

    // Soundex key is fulfilled ?
    if (result.length === length) {
      return result;
    }

    // Save previous for next loop
    previous = code;
  }

  // Fill with 0
  return result.padEnd(length, '0');
};
