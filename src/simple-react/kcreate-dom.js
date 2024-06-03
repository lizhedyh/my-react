import { initNode } from './util';

function render(vnode, container) {
  const node = initNode(vnode);

  container.appendChild(node);
}

export default {
  render,
};
