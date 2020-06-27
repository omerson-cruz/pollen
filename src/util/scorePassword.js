/**
 * A simple password scorer. Taken from:
 * https://stackoverflow.com/questions/948172/password-strength-meter#comment71030552_11268104
 * There is a different scoring algorithm (owasp-password-scorer) being used
 * by `honey`. We might want to consolidate, but this one is a little bit more
 * sophisticated.
 * @param {String} pwd - Password to test.
 * @return {Number} - Result.
 *   >= 80 : strong
 *   >= 60 : ok
 *   >= 30 : weak
 *   >= 0 : bad
 */
function scorePassword(pwd) {
  let ltr;
  let i;
  let l;
  let variation = 0;
  const letters = {};
  let score = 0;

  if (!pwd) {
    return score;
  }

  /* Score character variation */
  const variations = {
    lower: /[a-z]/.test(pwd),
    upper: /[A-Z]/.test(pwd),
    nonWords: /\W/.test(pwd),
    digits: /\d/.test(pwd),
  };

  Object.values(variations).forEach((item) => {
    variation += item ? 1 : 0;
  });

  score += (variation - 1) * 10;

  /* Score unique letters until 5 repetitions */
  for (i = 0, l = pwd.length; i < l; i += 1) {
    letters[pwd[i]] = (letters[pwd[i]] || 0) + 1;
    ltr = letters[pwd[i]];
    score += 5 / ltr;
  }

  /* Score length (about 8 chars for a safe password) */
  score -= 16 - pwd.length / 16;

  return parseInt(score, 10);
}

export default scorePassword;
