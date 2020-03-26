const soundex = require('./index');

// Start tests ...
describe('Soundex FR', () => {
  it('expect equal for KABYLE & KAPILE', () => expect(soundex('KABYLE')).toBe(soundex('KAPILE')));
  it('expect equal for AMIE & ANIE', () => expect(soundex('AMIE')).toBe(soundex('ANIE')));
  it('expect equal for PÉNIBLE & PEMIPLE', () => expect(soundex('PENIBLE')).toBe(soundex('PEMIPLE')));
  it('expect equal for ACCROCHAGE & AKROCHAJE', () => expect(soundex('ACCROCHAGE')).toBe(soundex('AKROCHAJE')));
  it('expect different for DEUX & TROIS', () => expect(soundex('DEUX')).not.toBe(soundex('TROIS')));
});
