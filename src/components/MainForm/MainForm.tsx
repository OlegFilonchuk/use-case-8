import React, { ChangeEvent, FormEvent } from 'react';
import validator from 'validator';
import styles from './MainForm.module.css';
import { UserData } from '../../types';
import { useDispatch } from 'react-redux';
import { changeUserData } from '../../state/actions';

type State = UserData;

type Action = { type: keyof State; payload: string };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'email':
      return {
        ...state,
        email: action.payload,
      };

    case 'message':
      return {
        ...state,
        message: action.payload,
      };

    case 'firstName':
      return {
        ...state,
        firstName: action.payload,
      };

    case 'lastName':
      return {
        ...state,
        lastName: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

export function MainForm() {
  const globalDispatch = useDispatch();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const firstNameValid = !validator.isEmpty(state.firstName);
  const lastNameValid = !validator.isEmpty(state.lastName);
  const emailValid = validator.isEmail(state.email);
  const messageValid = validator.isLength(state.message, { min: 10 });

  const isFormValid =
    firstNameValid && lastNameValid && emailValid && messageValid;

  const handleChange =
    (id: keyof State) => (ev: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: id, payload: ev.target.value });
    };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    globalDispatch(changeUserData(state));
  };

  return (
    <div className={styles['main-form-wrapper']}>
      <form className={styles['main-form']} onSubmit={handleSubmit}>
        <input
          onChange={handleChange('firstName')}
          type="text"
          id="firstName"
          required
        />

        <input
          onChange={handleChange('lastName')}
          type="text"
          id="lastName"
          required
        />

        <input onChange={handleChange('email')} type="text" id="email" />

        <input onChange={handleChange('message')} type="text" id="message" />

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
}
