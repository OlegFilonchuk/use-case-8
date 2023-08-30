import { Reducer } from 'redux';
import { CHANGE_USER_DATA } from './actionTypes';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

export const formReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
