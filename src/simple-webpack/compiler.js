const fs = require('fs');
const path = require('path');
const parse = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

module.exports = class Complier{
  constructor(options) {
    const {entry, output} = options;

    this.entry = entry;
    this.output = output;
    console.log('options', options);
  }

  /**
   *  Obtain resources based on the entrance
   * @param filename
   * @return object {filename, dependency, code}
   */
  createAsset(filename) {
    // read file
    const content = fs.readFileSync(filename, 'utf-8');

    // transform content to ast tree
    const ast = parse.parse(content, { sourceType: 'module' });

    const dependencies = {};

    // traverse the ast to build dependencies
    traverse(ast, {
      ImportDeclaration: ({node}) => {
          const dirname = path.dirname(filename); // the directory name of the file
          const absPath = path.join(dirname, node.source.value);
          
          // key => node.source.value is relative path, "./hello.js"
          //  value => absolute path, "/Users/lizhe/日常练习/my-react/src/mock/hello.js"
          dependencies[node.source.value] = absPath;
      }
    });

    // transform the ast into executable code
    const code = babel.transformFromAst(ast, null, {
      presets: ['@babel/preset-env'],
    })

    return {
      filename,
      dependencies,
      code,
    }
  }

  /**
   * recursively execute "createAsset" from the entry
   * @returns queue 
   */
  run() {
    const mainAsset = this.createAsset(this.entry);
    const queue = [mainAsset];

    for (const asset of queue) {
      Object.values(asset.dependencies).forEach(filename => {
        const child = this.createAsset(filename)
        queue.push(child)
      })
    }

    return queue;
  }
}