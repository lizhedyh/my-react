import React, { Component } from './source/kcreact';
import ReactDOM from './source/kcreate-dom';

function Comp(props) {
  return <h2>hi {props.name}</h2>
}

class Comp2 extends Component {
  render() {
    return (
      <div>
        <h2>hi, {this.props.name}</h2>
      </div>
    )
  }
}

const jsx = (
  <div id="demo">
    <span>hello</span>
    <Comp name="函数组件"></Comp>
    <Comp2 name="类组件"></Comp2>
  </div>
)

ReactDOM.render(jsx, document.getElementById('root'));