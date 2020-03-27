//-------
// Soundex for french phonetics
//-------
module.exports = function (str) {
  // Keep letters only
  const buffer = String(str).normalize('NFD').toUpperCase().replace(/[\u0300-\u036f]|[^A-Z]/g, '');

  // Empty string ?
  if (buffer.length === 0) {
    return null;
  }

  // Letter mapping for french phonetics
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
  };

  // Init loop
  const first = buffer.charAt(0);
  let result = '';
  let prev = null;

  for (let i = 1; i < buffer.length; i += 1) {
    const code = codes[buffer[i]] || null;

    if (code !== null && (i !== 1 || code !== codes[first]) && code !== prev) {
      result += code;
    }

    prev = code;
  }

  return `${first}${result}000`.slice(0, 4);
};
