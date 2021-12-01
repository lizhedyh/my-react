import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';
import { HelloPage } from './pages/hello';
import { HomePage } from './pages/home';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div><Link to="/home">Home</Link></div>
            <div><Link to="/hello">Hello</Link></div>
          </>
        }
      />
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/hello' element={<HelloPage/>}></Route>
    </Routes>
  </BrowserRouter>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
