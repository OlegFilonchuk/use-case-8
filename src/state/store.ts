import { createStore } from 'redux';
import { formReducer } from './reducer';
import { UserData } from '../types';

export const store = createStore(formReducer);

export const setupStore = (preloadedState: UserData) =>
  createStore(formReducer, preloadedState);
