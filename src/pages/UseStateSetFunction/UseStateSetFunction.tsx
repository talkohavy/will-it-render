import Button from '@src/components/controls/Button';
import { useState } from 'react';
import { firstButtonCode, secondButtonCode } from './constants';

export default function UseStateSetFunction() {
  const [timeState, setTimeState] = useState({ startDate: 123, endDate: 456 });

  console.log('timeState is:', timeState);

  return (
    <div className='flex flex-col gap-8 p-6 size-full overflow-auto'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-2xl font-bold'>- Description</h3>

        <p>
          Below there's a blue box component, with a state of timeState. timeState = &lcub; startDate: string, endDate:
          string &rcub;. Inside there are 2 buttons. Both of them are trying to do the same thing. which is update
          timeState by increasing the startDate by +1.
        </p>

        <p className='mt-6'>The code for the first button is as follows:</p>

        <pre className='bg-slate-700 p-4 rounded-md border'>
          <code>{firstButtonCode}</code>
        </pre>

        <p className='mt-6'>The code for the second button is as follows:</p>

        <pre className='bg-slate-700 p-4 rounded-md border'>
          <code>{secondButtonCode}</code>
        </pre>
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className='text-2xl font-bold'>- Question:</h3>

        <p>What would happen now upon clicking each one of the buttons?</p>
      </div>

      <div className='bg-slate-900 border rounded-lg p-4'>
        <div className='flex gap-3'>
          <Button
            onClick={() =>
              setTimeState((t) => {
                t.startDate += 1;
                console.log('t is:', t);
                return t;
              })
            }
          >
            Mutate timeState
          </Button>

          <Button onClick={() => setTimeState((t) => ({ ...t, startDate: t.startDate + 1 }))}>
            Instantiate new timeState
          </Button>
        </div>

        <div className='mt-10'>startDate is: {timeState.startDate}</div>
        <div className='mt-2'>endDate is: {timeState.endDate}</div>
      </div>
    </div>
  );
}
