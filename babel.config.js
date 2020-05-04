module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:react-native-dotenv'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          alias: {
            screens: './src/screens',
            '@types': './src/@types',
          },
        },
      ],
    ],
  };
};
