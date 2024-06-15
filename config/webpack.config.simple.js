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
  plugins: [
    new htmlWebpackPlugin({
      title: "test webpack",
      template: "./mock/index.html",
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: "runtime", // 运行时 chunk 的名字
    },
  },
  module: {
    rules: [
      {
        test: /\.(css)/,
        use: [
          {
            loader: "style-loader",
            options: { injectType: "singletonStyleTag" },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(jpg|png)/,
        use: {
          loader: "url-loader",
          options: {
            limit: 2048, // when img size < 2kb, use file-loader
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: {
              removeComments: true,
              collapseWhitespace: true,
            },
          },
        },
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
        },
      },
    ],
  },
};
