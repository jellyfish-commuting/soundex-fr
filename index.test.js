const soundex = require('./index');

// Start tests ...
describe('Soundex FR', () => {
  it('expect equal for Kabyle & Kapile', () => expect(soundex('Kabyle')).toBe(soundex('Kapile')));
  it('expect equal for Dupont & Dupond', () => expect(soundex('Dupont')).toBe(soundex('Dupond')));
  it('expect equal for Robert & Rupert', () => expect(soundex('Robert')).toBe(soundex('Rupert')));
  it('expect equal for Annie & Amnie', () => expect(soundex('Annie')).toBe(soundex('Amnie')));
  it('expect different for deux & trois', () => expect(soundex('deux')).not.toBe(soundex('trois')));
});
