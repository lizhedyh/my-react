// React17---------------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom'; // React17
// import { OldReact } from './components/react18/old';

// ReactDOM.render(<OldReact></OldReact>, document.getElementById('root')); // React17


// React18----------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { TransitionReact } from './components/react18/transition';
import { DefferedReact } from './components/react18/deferred';

const root = document.getElementById('root');


// ReactDOM.createRoot(root).render(<TransitionReact></TransitionReact>);
ReactDOM.createRoot(root).render(<DefferedReact></DefferedReact>);
