//-------
// Soundex for french phonetics
//-------
module.exports = function (str) {
  // Keep letters only
  const buffer = String(str).normalize('NFD').toUpperCase().replace(/[\u0300-\u036f]|[^A-Z]/g, '');

  // Empty string ?
  if (buffer.length === 0) {
    return '0000';
  }

  // Letter mapping for french phonetics
  const codes = {
    B: '1', P: '1',
    C: '2', K: '2', Q: '2',
    D: '3', T: '3',
    L: '4',
    M: '5', N: '5',
    R: '6',
    G: '7', J: '7',
    X: '8', Z: '8', S: '8',
    F: '9', V: '9',
  };

  return [...buffer.slice(1)]
    // Map all chars in buffer
    .reduce(
      (acc, letter, i) => {
        // Different than previous letter ?
        if (codes[letter] && codes[letter] !== codes[buffer[i]]) {
          return acc + codes[letter];
        }

        return acc;
      },
      // Init accumulator with first letter
      buffer[0],
    )
    // Fill with 0
    .padEnd(4, '0');
};
