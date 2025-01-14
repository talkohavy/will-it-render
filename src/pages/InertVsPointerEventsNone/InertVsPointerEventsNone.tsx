import { useState } from 'react';
import Button from '../../components/controls/Button';

export default function InertVsPointerEventsNone() {
  const [value, setValue] = useState('hello');

  return (
    <div className='size-full p-6 overflow-auto'>
      <div className='flex gap-4'>
        <Button
          onClick={() => {
            if (value === 'hello') return setValue('world');
            return setValue('hello');
          }}
        >
          click me (normal)
        </Button>

        <Button
          onClick={() => {
            if (value === 'hello') return setValue('world');
            return setValue('hello');
          }}
          className='pointer-events-none'
        >
          click me (pointer-events none)
        </Button>

        <Button
          onClick={() => {
            if (value === 'hello') return setValue('world');
            return setValue('hello');
          }}
          inert
        >
          click me (inert)
        </Button>

        <Button
          disabled
          onClick={() => {
            if (value === 'hello') return setValue('world');
            return setValue('hello');
          }}
        >
          click me (disabled)
        </Button>
      </div>

      <div>state: {value}</div>
    </div>
  );
}
