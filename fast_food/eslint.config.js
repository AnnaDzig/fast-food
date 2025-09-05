// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const pluginImport = require("eslint-plugin-import");

module.exports = defineConfig([
  expoConfig,
  {
    plugins: { import: pluginImport },
    settings: {
      "import/resolver": {
        // reads "@/*" from tsconfig.json
        typescript: { project: "./tsconfig.json" },
        // also resolve assets so import/no-unresolved stops complaining
        node: {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".json",
            ".png",
            ".jpg",
            ".jpeg",
            ".svg",
          ],
        },
      },
    },
    ignores: ["dist/*"],
  },
]);
