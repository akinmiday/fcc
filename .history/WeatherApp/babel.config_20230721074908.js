module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plungins: ["module:react-native-dotenv"]
  }
}