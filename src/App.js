import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { MenuProvider } from 'react-native-popup-menu';
import Router from './Router';
import reducers from './reducers';

class Root extends Component {
  constructor(props) {
    super(props);

    this.store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  }

  render() {
    return (
      <Provider store={this.store}>
        <MenuProvider backHandler>
          <Router />
        </MenuProvider>
      </Provider>
    );
  }
}

export default Root;
