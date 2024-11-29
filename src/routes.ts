import { lazy } from 'react';

const UseStateInitialValue = lazy(() => import('./pages/UseStateInitialValue'));

export const routes = [
  {
    to: '/',
    text: 'useState initial value',
    activeNames: ['/home', '/'],
    Component: UseStateInitialValue,
  },
];
