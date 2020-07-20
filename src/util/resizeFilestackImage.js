import last from 'lodash/last';

const FS_BASE_URL = 'https://cdn.filestackcontent.com';

/**
 * Takes an image url, and if it's a Filestack image applies resize parameters.
 * See: https://www.filestack.com/docs/api/processing/#resize
 * @param {string} url - url to transform
 * @param {object} options - resize paremeters to apply
 */
function resizeFilestackImage(url, options = {}) {
  if (url.indexOf(FS_BASE_URL) !== 0) {
    // This isn't a filestack URL. Return the original URL.
    return url;
  }
  const params = Object.entries(options)
    .map((entry) => entry.join(':'))
    .join(',');
  if (!params) {
    // No parameters included. Return the original URL.
    return url;
  }
  const imageId = last(url.split('/'));
  return [FS_BASE_URL, `resize=${params}`, imageId].join('/');
}

export default resizeFilestackImage;
