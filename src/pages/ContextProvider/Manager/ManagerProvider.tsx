import { PropsWithChildren, useMemo, useState } from 'react';
import { ManagerContext } from './ManagerContext';
import Button from '@src/components/controls/Button';

type ManagerProviderProps = PropsWithChildren;

export default function ManagerProvider(props: ManagerProviderProps) {
  console.log('Manager Context Provider rendered');

  const { children } = props;

  const [providerValue, setProviderValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen, setIsOpen]);
  // const value = { isOpen, setIsOpen };

  console.log('value is:', value);

  return (
    <ManagerContext.Provider value={value}>
      <div className='border bg-purple-800 p-6 rounded-2xl'>
        <div className='flex justify-start items-start flex-col gap-4 mb-6'>
          <Button onClick={() => setProviderValue((p) => p + 1)}>Click</Button>

          <div>non-state value is: {providerValue}</div>
        </div>

        {children}
      </div>
    </ManagerContext.Provider>
  );
}
