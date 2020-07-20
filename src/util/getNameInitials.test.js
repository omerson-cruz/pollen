import getNameInitials from './getNameInitials';

describe('getNameInitials', () => {
  test('returns the correct initials', () => {
    expect(getNameInitials('Xavier James Oaxaca')).toEqual('XO');
  });
  test('returns a single initial if only one name', () => {
    expect(getNameInitials('Xavier')).toEqual('X');
  });
  test('returns an empty string for null values', () => {
    expect(getNameInitials(null)).toEqual('');
  });
});
