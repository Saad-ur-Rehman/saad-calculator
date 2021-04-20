/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Calculator from './Components/Calculator/Calculator';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  )
}
export default App;
