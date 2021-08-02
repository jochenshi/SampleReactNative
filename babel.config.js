module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          pages: './src/pages',
          util: './src/utils'
        }
      }
    ],
    ["import", { libraryName: "@ant-design/react-native" }]
  ]
};
