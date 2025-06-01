const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Remove .svg from assetExts and add to sourceExts
config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);
config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"];

// Wrap with nativewind for Tailwind support
module.exports = withNativeWind(config, {
  input: "./app/globals.css", // Adjust if your globals.css is elsewhere
});
