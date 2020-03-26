const soundex = require('./index');

// Start tests ...
describe('Soundex FR', () => {
  it('expect equal for Kabyle & Kapile', () => expect(soundex('Kabyle')).toBe(soundex('Kapile')));
  it('expect equal for Amie & Anie', () => expect(soundex('Amie')).toBe(soundex('Anie')));
  it('expect equal for Pénible & Pemiple', () => expect(soundex('Pénible')).toBe(soundex('Pemiple')));
  it('expect equal for Accrochage & Akrochaje', () => expect(soundex('Accrochage')).toBe(soundex('Akrochaje')));
  it('expect different for deux & trois', () => expect(soundex('deux')).not.toBe(soundex('trois')));
});
