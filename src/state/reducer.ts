import { Reducer } from 'redux';
import {
  CHANGE_EMAIL,
  CHANGE_MESSAGE,
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
} from './actionTypes';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

export const formReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case CHANGE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    case CHANGE_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };

    case CHANGE_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };

    default:
      return state;
  }
};
