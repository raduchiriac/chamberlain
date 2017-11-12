import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import style from './style.css';

export default class App extends Component {
  render() {
    return <h2>Chamberlain</h2>;
  }
}

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <App />,
  document.getElementById('app'));
