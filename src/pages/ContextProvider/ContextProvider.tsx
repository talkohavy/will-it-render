import { useEffect } from 'react';
import ManagerProvider from './Manager/ManagerProvider';
import { useManagerContext } from './Manager/ManagerContext';
import Button from '@src/components/controls/Button';

/**
 * The setup:
 *
 * You have a Context Provider. It has a state.
 * A part of its state is being used as the exported "value", and the rest isn't.
 *
 * Question 1: When the part that isn't part of the value gets updated, who gets rendered?
 *             (Answer once when value is memoed, and once when it isn't)
 *
 * Question 2: When the part that is part of the value gets updated, who gets rendered?
 *
 */
export default function ContextProvider() {
  console.log('Top Component rendered.');

  return (
    <div className='flex flex-col size-full gap-4 p-4 border rounded-lg bg-gray-900'>
      <ManagerProvider>
        <Parent />
      </ManagerProvider>
    </div>
  );
}

function Parent() {
  console.log('Parent rendered');

  useEffect(() => {
    console.log('useEffect of Parent rendered');

    return () => {
      console.log('cleanup of Parent invoked!');
    };
  }, []);

  return (
    <div className='flex flex-col gap-10 border rounded-lg p-4 bg-pink-400'>
      <div>hello from parent</div>

      <Child />
    </div>
  );
}

function Child() {
  const { setIsOpen } = useManagerContext();
  console.log('Child rendered');

  useEffect(() => {
    console.log('useEffect of Child rendered');

    return () => {
      console.log('cleanup of Child invoked!');
    };
  }, [setIsOpen]);

  return (
    <div className='flex flex-col gap-4 bg-slate-700 border rounded-lg text-white p-4'>
      <div>hello from child</div>

      <Button onClick={() => setIsOpen((isOpen: boolean) => !isOpen)}>click</Button>
    </div>
  );
}
