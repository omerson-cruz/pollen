import abbreviateNumber from './abbreviateNumber';

describe('abbreviateNumber', () => {
  test('returns a string of a number that is less than 1000', () => {
    expect(abbreviateNumber(999)).toEqual('999');
  });
  test('abbreviates 1000 to 1k', () => {
    expect(abbreviateNumber(1000)).toEqual('1K');
  });
  test('abbreviates 1001 to 1k', () => {
    expect(abbreviateNumber(1001)).toEqual('1K');
  });
  test('abbreviates 1234 to 1.2k', () => {
    expect(abbreviateNumber(1234)).toEqual('1.2K');
  });
  test('abbreviates 100000 to 100K', () => {
    expect(abbreviateNumber(100000)).toEqual('100K');
  });
  test('abbreviates 123456789 to 123.5M', () => {
    expect(abbreviateNumber(123456789)).toEqual('123.5M');
  });
  test('returns null if value is null', () => {
    expect(abbreviateNumber(null)).toEqual(null);
  });
});
