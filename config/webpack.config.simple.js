const fs = require("fs");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd()); // get absolute path for process startup

module.exports = {
  mode: "development",
  context: path.resolve(appDirectory, "src"),
  entry: {
    index: "./mock/index.js",
    hello: "./mock/hello.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(appDirectory, "dist"),
    clean: true, // clear dist before build
  },
  plugins: [new htmlWebpackPlugin({ title: "xx" })],
  optimization: {
    runtimeChunk: {
      name: "runtime", // 运行时 chunk 的名字
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "./simple-webpack/js-loader.js",
      },
    ],
  },
};
