const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd()); // get absolute path for process startup

module.exports = {
  entry: path.resolve(appDirectory, 'src/mock/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(appDirectory, 'dist')},
}