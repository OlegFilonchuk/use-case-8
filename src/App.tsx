import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { MainForm } from './components/MainForm';
import { UserDetails } from './components/UserDetails';

import styles from './App.module.css';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <MainForm />

        <UserDetails />
      </div>
    </Provider>
  );
}

export default App;
