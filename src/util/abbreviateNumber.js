/**
 * Takes a number and returns an abbreviated string equivalent,
 * i.e. 1,100 => 1.1k. Adapted from https://stackoverflow.com/a/32638472.
 * @param {Number} num
 * @returns {String}
 */
function abbreviateNumber(num, precision) {
  if (num === null) {
    return null;
  } // terminate early
  if (num < 1000) {
    return `${num}`;
  } // terminate early
  const fixed = !precision || precision < 0 ? 0 : precision; // number of decimal places to show
  const b = num.toPrecision(2).split('e'); // get power
  const k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3); // floor at decimals, ceiling at trillions
  const c =
    k < 1 ? num.toFixed(0 + fixed) : (num / 10 ** (k * 3)).toFixed(1 + fixed); // divide by power
  const d = c < 0 ? c : Math.abs(c); // enforce -0 is 0
  const e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
  return e;
}

export default abbreviateNumber;
