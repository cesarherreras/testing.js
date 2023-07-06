module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "linebreak-style": 0,
    "no-plusplus": 0,
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: "./",
      },
    ],
  },
};
