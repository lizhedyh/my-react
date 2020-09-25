import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Select } from '@myfe/catd';


ReactDOM.render(
  <Select.Appkey />,
document.getElementById('root'));

serviceWorker.unregister();
