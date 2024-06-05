const compiler = require('./compiler');
const options = require('../../config/webpack.config.simple');

const graph = new compiler(options).run();
console.log('graph', graph);