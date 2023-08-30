import { UserData } from '../types';
import { CHANGE_USER_DATA } from './actionTypes';

export const changeUserData = (payload: UserData) => ({
  type: CHANGE_USER_DATA,
  payload,
});
