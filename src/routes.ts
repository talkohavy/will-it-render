import { lazy } from 'react';

const UseStateInitialValue = lazy(() => import('./pages/UseStateInitialValue'));
const ResetStateWithKeyPage = lazy(() => import('./pages/ResetStateWithKey'));

export const routes = [
  {
    to: '/',
    text: 'useState initial value',
    activeNames: ['/home', '/'],
    Component: UseStateInitialValue,
  },
  {
    to: '/reset-state-with-key',
    text: 'Reset State With Key',
    activeNames: ['/reset-state-with-key'],
    Component: ResetStateWithKeyPage,
  },
];
