import React from 'react';
import HomePage from './Pages/HomePage';
import UsersListPage from './Pages/UsersListPage';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    path: '/users',
    ...UsersListPage,
  },
];
