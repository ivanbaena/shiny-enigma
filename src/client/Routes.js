import React from 'react';
import App from './App';
import HomePage from './Pages/HomePage';
import UsersListPage from './Pages/UsersListPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        path: '/users',
        ...UsersListPage,
      },
    ],
  },
];
