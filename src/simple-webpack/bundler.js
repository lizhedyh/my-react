const fs = require("fs");
const path = require("path");
const compiler = require("./compiler");
const options = require("../../config/webpack.config");

const { entry, output } = options;

const bundle = (graph) => {
  let modules = {};

  // graph array transform to hash object
  graph.forEach((item) => {
    modules[item.filename] = {
      dependencies: item.dependencies,
      code: item.code,
    };
  });
  modules = JSON.stringify(modules);
  const result = `(function(graph){
      function require(filepath) {
        function localRequire(relativePath) {
            // 将代码中的require中的路径转换成dependencies存储的带文件夹名的路径
           return require(graph[filepath].dependencies[relativePath])
        }
        var exports = {}
        function fn(require, exports, code) {
            eval(code)
        }
        fn(localRequire, exports, graph[filepath].code)
        return exports
      }
      require('${entry}')
    })(${modules})`;
  return result;
};

const createFile = (code) => {
  fs.writeFileSync(path.join(output.path, output.filename), code);
};

const graph = new compiler(options).run();
console.log("graph", graph);
const result = bundle(graph);
console.log("result", result);
createFile(result);
