import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { setupStore, store } from './state/store';
import { UserData } from './types';

type Options = {
  preloadedState?: UserData;
};

export function renderWithStore(ui: ReactElement, options?: Options) {
  const wrappedUI = (
    <Provider
      store={
        options?.preloadedState ? setupStore(options?.preloadedState) : store
      }
    >
      {ui}
    </Provider>
  );
  return render(wrappedUI);
}

export const mockedValues: UserData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'email@mail.com',
  message: 'some fantastic message',
};
