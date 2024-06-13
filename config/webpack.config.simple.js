const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd()); // get absolute path for process startup

module.exports = {
  mode: "development",
  context: path.resolve(appDirectory, 'src/mock'),
  entry: {
    index: './index.js',
    hello: './hello.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(appDirectory, 'dist')},
}