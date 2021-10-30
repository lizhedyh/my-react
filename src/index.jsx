import React from './source/kcreact';
import ReactDOM from './source/kcreate-dom';

function Comp(props) {
  return <h2>hi {props.name}</h2>
}

const jsx = (
  <div id="demo">
    <span>hello</span>
    <Comp name="lizhe"></Comp>
  </div>
)

ReactDOM.render(jsx, document.getElementById('root'));