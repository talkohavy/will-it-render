import { createContext, useContext } from 'react';

type Manager = {
  isOpen: boolean;
  setIsOpen: (value: any) => void;
};

const initialState = {} as Manager;

export const ManagerContext = createContext(initialState);
export const useManagerContext = () => useContext(ManagerContext);
