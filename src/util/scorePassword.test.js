import scorePassword from './scorePassword';

describe('scorePassword', () => {
  test('returns a number', () => {
    expect(typeof scorePassword('test')).toBe('number');
  });
  test('a weak password score for an empty password', () => {
    expect(scorePassword('') <= 0).toBe(true);
  });
  test('a weak password score for `hi`', () => {
    expect(scorePassword('hi') < 30).toBe(true);
  });
  test('a strong password score for `WatermelonHappinessOmen`', () => {
    expect(scorePassword('WatermelonHappinessOmen') > 80).toBe(true);
  });
});
