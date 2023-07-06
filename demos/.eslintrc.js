/* eslint-disable quotes */
// eslint-disable-next-line spaced-comment
/*eslint linebreak-style: ["error", "unix"] */

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: "airbnb-base",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
  },
};
