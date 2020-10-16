module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            "@": "./src",
            "@models": "./src/models",
            "@database": "./src/database",
            "@services": "./src/services",
            "@pages": "./src/pages",
          }
        }
      ]
    ]
  };
};
