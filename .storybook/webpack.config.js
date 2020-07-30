const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: './.storybook/',
          },
        },
      },
    ],

    include: path.resolve(__dirname, '../storybook/'),
  });

  // Prevent Storybook generic SVG loader from taking care of SVG icons going in the sprite
  const fileLoader = config.module.rules.find((rule, i) => {
    return rule.loader && rule.loader.match(/file-loader/);
  });
  fileLoader.exclude = path.resolve('./src/assets/icons');

  config.module.rules.push({
    test: /\.svg$/,
    use: ['babel-loader', 'vue-svg-loader'],
    include: path.resolve('./src/assets/icons'),
  });

  return config;
};
