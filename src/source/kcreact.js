// jsx => vnode
import { createVNode } from './util';
function createElement(type, props, ...children) {
  let vtype; // 组件类型
  props.children = children;
  delete props.__self;
  delete props.__source;

  if (typeof type === 'string') { // 原生标签
    vtype = 1;
  } else if (typeof type === 'function') {
    if (type.isClassComponent) { // 类组件
      vtype = 2;
    } else { // 函数组件
      vtype = 3
    }
  }
  return createVNode(vtype, type, props);
}
export class Component {
  static isClassComponent = true;
  constructor(props) {
    this.props = props;
    this.state = {};
  }
  setState () {

  }
}

export default {
  createElement,
};