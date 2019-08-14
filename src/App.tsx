import React from 'react';
import {Provider} from 'react-redux';
import {createAppStore} from './stores';
import Home from './screens/home';

const store = createAppStore();

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
