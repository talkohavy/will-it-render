import { lazy } from 'react';

const UseStateInitialValue = lazy(() => import('./pages/UseStateInitialValue'));
const UseStateSetFunction = lazy(() => import('./pages/UseStateSetFunction'));
const ResetStateWithKeyPage = lazy(() => import('./pages/ResetStateWithKey'));
const ContextProvider = lazy(() => import('./pages/ContextProvider'));
const Memoization = lazy(() => import('./pages/Memoization'));
const ArrayWithoutKeys = lazy(() => import('./pages/ArrayWithoutKeys'));
const InertVsPointerEventsNone = lazy(() => import('./pages/InertVsPointerEventsNone'));

export const routes = [
  {
    to: '/',
    text: 'useState initial value',
    activeNames: ['/home', '/'],
    Component: UseStateInitialValue,
  },
  {
    to: '/use-state-set-function',
    text: 'useState set function',
    activeNames: ['/use-state-set-function'],
    Component: UseStateSetFunction,
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
  {
    to: '/array-without-keys',
    text: 'Array without keys',
    activeNames: ['/array-without-keys'],
    Component: ArrayWithoutKeys,
  },
  {
    to: '/inert',
    text: 'inert v.s. pointer-events-none',
    activeNames: ['/inert'],
    Component: InertVsPointerEventsNone,
  },
];
