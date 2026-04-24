"use strict";
const config = require("gts/build/src/index.js");
const ignores = require("gts/eslint.ignores.js");
const defineConfig = require("eslint/config").defineConfig;

module.exports = defineConfig([
  { ignores: [...ignores, "eslint.config.js"] },
  ...config,
]);
