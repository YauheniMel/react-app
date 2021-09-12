import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/state';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

function rerenderReactDom(store) {
  ReactDOM.render(
    <React.StrictMode>
      <App state={ store.getState() }
           dispatch={ store.dispatch.bind(store) }
           />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderReactDom(store);

store.reassignMethod(rerenderReactDom);

export default rerenderReactDom;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
