module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './stedu', // 👈 adjust to match your actual app folder
          },
        },
      ],
    ],
  };
};
