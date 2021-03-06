require('./data/createContext');

module.exports = {
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};
