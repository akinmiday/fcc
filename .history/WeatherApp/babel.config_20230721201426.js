module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plungin: ["module: react-native-dotenv"]
  }
}
