const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd()); // get absolute path for process startup

module.exports = {
  entry: path.resolve(appDirectory, 'src/index'),
  output: path.resolve(appDirectory, 'build'),
}