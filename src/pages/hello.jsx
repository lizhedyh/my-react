import React from 'react';
import { Link } from "react-router-dom";
import Hello from '../components/Hello';

const HelloPage = () => {
  return (
    <>
      <Hello name="土拨鼠"></Hello>
      <Link to="/home">Link To Home Page</Link>
    </>
  )
}

export {
  HelloPage
}