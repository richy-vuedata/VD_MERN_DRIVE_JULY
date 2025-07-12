import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//////////////////////////////////////////////////////////

import React from 'react';
// import { ButtonCounter,useState } from './components/ButtonCounter';
import { useState } from 'react';

const items = [
  { title: '1', content: 'First content' },
  { title: '2', content: 'Second content' },
];

export const App = () => {
  const [content, setContent] = useState(null);
  function clickHandler() {
    debugger;
    document.getElementById('content1');
    return 'Hello World';
  }

  return (
    <>
      <div id="content1" style={{ border: 'solid 2px black', width: '90px' }}>
        First
        <button style={{ marginLeft: '15px' }} onClick={clickHandler}>
          &darr;
        </button>
      </div>{' '}
      <br />
      <div style={{ border: 'solid 2px black', width: '90px' }}>
        Second<button>&darr;</button>
      </div>
    </>
  );
};

/////////////////////////////////////


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
