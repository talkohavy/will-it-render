import { lazy } from 'react';

const UseStateInitialValue = lazy(() => import('./pages/UseStateInitialValue'));
const ResetStateWithKeyPage = lazy(() => import('./pages/ResetStateWithKey'));
const ContextProvider = lazy(() => import('./pages/ContextProvider'));
const Memoization = lazy(() => import('./pages/Memoization'));

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
  {
    to: '/context-provider',
    text: 'Context Provider',
    activeNames: ['/context-provider'],
    Component: ContextProvider,
  },
  {
    to: '/memoization',
    text: 'Memoization',
    activeNames: ['/memoization'],
    Component: Memoization,
  },
];
