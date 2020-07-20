import resizeFilestackImage from './resizeFilestackImage';

describe('resizeFilestackImage', () => {
  test('returns a Filestack URL with resize parameters', () => {
    const originalUrl = 'https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc';
    const expectedUrl =
      'https://cdn.filestackcontent.com/resize=height:200,width:200/enCa5BTVeIsLHcgkdpAc';
    expect(
      resizeFilestackImage(originalUrl, { height: 200, width: 200 })
    ).toEqual(expectedUrl);
  });
  test('returns the original URL if it is not on the filestack domain', () => {
    const originalUrl = 'https://placekitten.com/200/300';
    expect(
      resizeFilestackImage(originalUrl, { height: 200, width: 200 })
    ).toEqual(originalUrl);
  });
  test('returns the original URL if no parameters are provided', () => {
    const originalUrl = 'https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc';
    expect(resizeFilestackImage(originalUrl)).toEqual(originalUrl);
  });
});
