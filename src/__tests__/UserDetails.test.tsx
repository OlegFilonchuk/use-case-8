import React from 'react';
import { screen } from '@testing-library/react';
import { mockedValues, renderWithStore } from '../testUtils';
import { UserDetails } from '../components/UserDetails';

describe('User Details', () => {
  it('should render data from the store by default', () => {
    renderWithStore(<UserDetails />);

    const firstNameCell = screen.getByTestId('first-name');
    expect(firstNameCell).toBeInTheDocument();
    expect(firstNameCell).toHaveTextContent('');

    const lastNameCell = screen.getByTestId('last-name');
    expect(lastNameCell).toBeInTheDocument();
    expect(lastNameCell).toHaveTextContent('');

    const emailCell = screen.getByTestId('email');
    expect(emailCell).toBeInTheDocument();
    expect(emailCell).toHaveTextContent('');

    const messageCell = screen.getByTestId('message');
    expect(messageCell).toBeInTheDocument();
    expect(messageCell).toHaveTextContent('');
  });

  it('should render proper data from the store', () => {
    renderWithStore(<UserDetails />, { preloadedState: mockedValues });

    const firstNameCell = screen.getByTestId('first-name');
    expect(firstNameCell).toHaveTextContent(mockedValues.firstName);

    const lastNameCell = screen.getByTestId('last-name');
    expect(lastNameCell).toHaveTextContent(mockedValues.lastName);

    const emailCell = screen.getByTestId('email');
    expect(emailCell).toHaveTextContent(mockedValues.email);

    const messageCell = screen.getByTestId('message');
    expect(messageCell).toHaveTextContent(mockedValues.message);
  });
});
