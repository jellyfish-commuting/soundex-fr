const soundex = require('./index');

// Start tests ...
describe('Soundex FR', () => {
  it('expect equal for Dupont & Dupond', () => expect(soundex('Dupont')).toBe(soundex('Dupond')));
  it('expect equal for Éric & Erick', () => expect(soundex('Éric')).toBe(soundex('Erick')));
  it('expect equal for Robert & Rupert', () => expect(soundex('Robert')).toBe(soundex('Rupert')));
  it('expect equal for Annie & Amnie', () => expect(soundex('Annie')).toBe(soundex('Amnie')));
  it('expect equal for Jean-Jacque & Jan-Jaque', () => expect(soundex('Jean-Jacque')).toBe(soundex('Jan-Jaque')));
  it('expect M6358 for Martinez with length = 5', () => expect(soundex('Martinez', 5)).toBe('M6358'));
  it('expect 4 chars for Love with over length', () => expect(soundex('Love', 10)).toBe('L900'));
  it('expect different for Kabyle & Arab', () => expect(soundex('Kabyle')).not.toBe(soundex('Arab')));
});
