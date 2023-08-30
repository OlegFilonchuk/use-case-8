import React from 'react';
import { useSelector } from 'react-redux';
import { UserData } from '../../types';

import styles from './UserDetails.module.css';

export function UserDetails() {
  const { email, firstName, lastName, message } = useSelector(
    (state: UserData) => state,
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th className={styles['user-details-table__value']}>Value</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>First Name</td>
            <td
              className={styles['user-details-table__value']}
              data-testid="first-name"
            >
              {firstName}
            </td>
          </tr>

          <tr>
            <td>Last Name</td>
            <td
              className={styles['user-details-table__value']}
              data-testid="last-name"
            >
              {lastName}
            </td>
          </tr>

          <tr>
            <td>Email</td>
            <td
              className={styles['user-details-table__value']}
              data-testid="email"
            >
              {email}
            </td>
          </tr>

          <tr>
            <td>Message</td>
            <td
              className={styles['user-details-table__value']}
              data-testid="message"
            >
              {message}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
