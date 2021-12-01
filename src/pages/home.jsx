// 源码简易版测试
// import React, { Component } from '../source/kcreact';
// import ReactDOM from '../source/kcreate-dom';

import React, { Component } from 'react';
import { Link } from "react-router-dom";

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

const users = [{
  name: '土拨鼠1号',
  age: 27,
}, {
  name: '番薯大神',
  age: 25,
}];

const HomePage = () => {
  return (
    <div id="demo" style={{ color: "red", border: "1px solid green" }}>
      <button onClick={() => {
        alert('clicked');
      }}>click me</button>
      <Comp name="函数组件"></Comp>
      <Comp2 name="类组件"></Comp2>
      <ul>
        {
          users.map((user) => (
            <li key={user.name}>{user.name}{user.age}</li>
          ))
        }
      </ul>
      <Link to="/hello">Link To Hello Page</Link>
    </div>
  );
}

export {
  HomePage,
  Comp2,
};