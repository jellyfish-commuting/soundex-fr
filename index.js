// Letter mapping for french phonetics, see https://fr.wikipedia.org/wiki/Soundex#Description
const codes = new Map(Object.entries({
  B: 1, P: 1,
  C: 2, Ç: 2, K: 2, Q: 2,
  D: 3, T: 3,
  L: 4,
  M: 5, N: 5,
  R: 6,
  G: 7, J: 7,
  X: 8, Z: 8, S: 8,
  F: 9, V: 9,
  A: 0, À: 0, Â: 0, Ä: 0,
  E: 0, É: 0, È: 0, Ê: 0, Ë: 0,
  I: 0, Î: 0, Ï: 0, O: 0,
  Ô: 0, Ö: 0, U: 0, Û: 0, Ü: 0, Ù: 0,
}));

//-------
// Soundex
//-------
module.exports = function (str, length = 4) {
  // Capitalize and remove accents
  const buffer = String(str).toUpperCase();

  // Init result
  let result = buffer.charAt(0).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  let previous = codes.get(result);

  // Map all chars
  for(let i = 1; i < buffer.length; i += 1) {
    // Retrieve current values
    const letter = buffer.charAt(i);
    const code = codes.get(letter);

    // Ignore letter
    if (code === undefined) {
      continue;
    }

    // Append code if different than previous
    if(code && code !== previous) {
      result += code;

      // Soundex key is fulfilled ?
      if (result.length === length) {
        return result;
      }
    }

    // Save previous for next loop
    previous = code;
  }

  // Fill with 0
  return result.padEnd(4, '0');
};
