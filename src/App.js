import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class Root extends Component {
  constructor(props) {
    super(props);

    this.store = createStore(() => {}, {}, applyMiddleware(ReduxThunk));
  }

  render() {
    return (
      <Provider store={this.store}>
        <Router />
      </Provider>
    );
  }
}

export default Root;
