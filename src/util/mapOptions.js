/**
 * Takes an array of strings or objects and normalizes them to an array of
 * objects with a `label`, and `value` key. If an item is a string, the `label`
 * and `value` will both equal that string.
 * @param {Array<String|Object>} options
 * @return {Array<Object>}
 */
const mapOptions = (options) =>
  options.map((item) => {
    if (typeof item === 'string') {
      return {
        label: item,
        value: item,
      };
    }
    const { label, value, ...rest } = item;

    return {
      label,
      value,
      ...rest,
    };
  });

export default mapOptions;
