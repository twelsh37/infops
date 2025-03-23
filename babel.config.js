// File: babel.config.js
// Babel configuration for Jest tests

/** @type {import('@babel/core').TransformOptions} */
const config = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

module.exports = config;
