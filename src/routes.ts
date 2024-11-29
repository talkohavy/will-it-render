import { lazy } from 'react';

const UseStateInitialValue = lazy(() => import('./pages/UseStateInitialValue'));
const ReduxExamplePage = lazy(() => import('./pages/ReduxExample'));

export const routes = [
  {
    to: '/',
    text: 'useState initial value',
    activeNames: ['/home', '/'],
    Component: UseStateInitialValue,
  },
  {
    to: '/redux',
    text: 'Redux Example',
    activeNames: ['/redux'],
    Component: ReduxExamplePage,
  },
];
