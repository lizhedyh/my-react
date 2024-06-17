const fs = require("fs");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

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
    path: path.resolve(appDirectory, "public"),
    publicPath: "/",
    clean: true, // clear public before build
  },
  devServer: {
    compress: true,
    port: 8080,
    hot: true,
    open: true,
    static: {
      directory: path.resolve(appDirectory, "public"),
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "test webpack",
      template: "./mock/index.html",
    }),
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    runtimeChunk: {
      name: "runtime", // 运行时 chunk 的名字
    },
    minimizer: [new CssMinimizerPlugin()],
  },
  devtool: "source-map",
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
