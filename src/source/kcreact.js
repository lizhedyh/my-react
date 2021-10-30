// jsx => vnode
function createElement(type, props, ...children) {
  props.children = children;
  delete props.__self;
  delete props.__source;
  return {
    props,
    type,
  }
}

export default {
  createElement
};