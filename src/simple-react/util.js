/**
 * jsx 处理成 虚拟dom
 * @param {*} vtype 元素类型
 * @param {*} type 标签类型
 * @param {*} props 属性
 */
function createVNode(vtype, type, props) {
  const vnode = {
    vtype,
    type,
    props,
  };

  return vnode;
}

/**
 * 虚拟dom处理成dom
 * @param {*} vnode
 */
function initNode(vnode) {
  const { vtype } = vnode;

  if (!vtype) {
    // 文本节点
    return document.createTextNode(vnode);
  }

  if (vtype === 1) {
    return createNormalTag(vnode);
  } else if (vtype === 2) {
    return createClassTag(vnode);
  } else if (vtype === 3) {
    return createFunctionTag(vnode);
  }
}

/**
 * 原生元素
 * @param {*} vnode 虚拟dom
 */
function createNormalTag(vnode) {
  let { type, props } = vnode;
  let node = document.createElement(type);

  let { key, children, ...rest } = props;

  Object.keys(rest).forEach(k => {
    if (k === 'className') {
      node.setAttribute('class', rest[k]);
    } else if (k === 'htmlFor') {
      node.setAttribute('for', rest[k]);
    } else if (k === 'style' && typeof rest[k] === 'object') {
      const style = Object.keys(rest[k]).map(s =>
        `${s }:${ rest[k][s]}`
      ).join(';');

      node.setAttribute('style', style);
    } else if (k.startsWith('on')) {
      const event = k.toLowerCase();

      node[event] = rest[k];
    } else {
      node.setAttribute(k, rest[k]);
    }
  });

  // 递归处理子元素
  children.forEach(c => {
    if (Array.isArray(c)) {
      c.forEach(item => {
        node.appendChild(initNode(item));
      });
    } else {
      node.appendChild(initNode(c));
    }
  });
  return node;
}

/**
 * class组件
 * @param {*} vnode 虚拟dom
 */
function createClassTag(vnode) {
  // type 是class声明
  const { type, props } = vnode;
  const component = new type(props);

  // 调用render方法 得到虚拟dom
  const vdom = component.render();

  return initNode(vdom);
}

/**
 * 函数组件
 * @param {*} vnode 虚拟dom
 */
function createFunctionTag(vnode) {
  // type 是函数
  const { type, props } = vnode;
  const vdom = type(props);

  return initNode(vdom);
}

export {
  createVNode,
  initNode,
};
