module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
      "module-resolver",
      {
        root: ["./src/"],
        alias: {
          app: "./src/app",
          pages: "./src/pages",
          widgets: "./src/widgets",
          features: "./src/features",
          entities: "./src/entities",
          shared: "./src/shared",
        },
     }]
    ]
  };
};
