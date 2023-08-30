import React, { ChangeEvent, FormEvent } from 'react';
import validator from 'validator';
import styles from './MainForm.module.css';
import { UserData } from '../../types';
import { useDispatch } from 'react-redux';
import { changeUserData } from '../../state/actions';

type State = UserData;

type Action = { type: keyof State; payload: string } | { type: 'reset' };

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

    case 'reset':
      return initialState;

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
    console.log(state);
    dispatch({ type: 'reset' });
  };

  return (
    <form className={styles['main-form']} onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        onChange={handleChange('firstName')}
        value={state.firstName}
        type="text"
        id="firstName"
        required
      />

      <input
        placeholder="Last Name"
        onChange={handleChange('lastName')}
        value={state.lastName}
        type="text"
        id="lastName"
        required
      />

      <input
        placeholder="Email"
        onChange={handleChange('email')}
        value={state.email}
        type="text"
        id="email"
      />

      <input
        placeholder="Message"
        onChange={handleChange('message')}
        value={state.message}
        type="text"
        id="message"
      />

      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
}
