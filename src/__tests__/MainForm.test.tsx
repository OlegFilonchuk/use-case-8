import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { MainForm } from '../components/MainForm';
import { mockedValues, renderWithStore } from '../testUtils';
import { changeUserData } from '../state/actions';

const mockDispatch = jest.fn();
jest.mock('react-redux/lib/hooks/useDispatch', () => ({
  useDispatch: () => mockDispatch,
}));

describe('Main Form', () => {
  it('should render empty inputs', () => {
    renderWithStore(<MainForm />);
    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const messageInput = screen.getByPlaceholderText('Message');

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();

    expect(firstNameInput).toHaveValue('');
    expect(firstNameInput).toHaveValue('');
    expect(firstNameInput).toHaveValue('');
    expect(firstNameInput).toHaveValue('');
  });

  it('should have a submit button disabled by default', () => {
    renderWithStore(<MainForm />);
    const button = screen.getByText('Submit');

    expect(button).toBeDisabled();
  });

  it('should enable the button after all validation rules pass', () => {
    renderWithStore(<MainForm />);

    const button = screen.getByText('Submit');

    const firstNameInput = screen.getByPlaceholderText('First Name');
    fireEvent.change(firstNameInput, {
      target: { value: mockedValues.firstName },
    });
    expect(firstNameInput).toHaveValue(mockedValues.firstName);
    expect(button).toBeDisabled();

    const lastNameInput = screen.getByPlaceholderText('Last Name');
    fireEvent.change(lastNameInput, {
      target: { value: mockedValues.lastName },
    });
    expect(lastNameInput).toHaveValue(mockedValues.lastName);
    expect(button).toBeDisabled();

    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, { target: { value: mockedValues.email } });
    expect(emailInput).toHaveValue(mockedValues.email);
    expect(button).toBeDisabled();

    const messageInput = screen.getByPlaceholderText('Message');
    fireEvent.change(messageInput, {
      target: { value: mockedValues.message },
    });
    expect(messageInput).toHaveValue(mockedValues.message);
    expect(button).not.toBeDisabled();
  });

  it('should trigger the state update and clear the form after submitting', () => {
    renderWithStore(<MainForm />);

    const firstNameInput = screen.getByPlaceholderText('First Name');
    fireEvent.change(firstNameInput, {
      target: { value: mockedValues.firstName },
    });

    const lastNameInput = screen.getByPlaceholderText('Last Name');
    fireEvent.change(lastNameInput, {
      target: { value: mockedValues.lastName },
    });

    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, { target: { value: mockedValues.email } });

    const messageInput = screen.getByPlaceholderText('Message');
    fireEvent.change(messageInput, {
      target: { value: mockedValues.message },
    });

    const button = screen.getByText('Submit');

    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith(changeUserData(mockedValues));

    expect(firstNameInput).toHaveValue('');
    expect(lastNameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });
});
