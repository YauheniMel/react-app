import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

function rerenderReactDom(state) {
  ReactDOM.render(
    <React.StrictMode>
      <App state={ state }
           dispatch={ store.dispatch.bind(store) }
           />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderReactDom(store.getState());

store.subscribe(() => {
  const state = store.getState();
  rerenderReactDom(state);
});

// store.reassignMethod(rerenderReactDom);

export default rerenderReactDom;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
