import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './state/store';

function App() {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
}

export default App;
