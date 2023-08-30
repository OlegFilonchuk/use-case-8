import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { MainForm } from './components/MainForm';

function App() {
  return (
    <Provider store={store}>
      <MainForm />
    </Provider>
  );
}

export default App;
