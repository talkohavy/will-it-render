import Button from '@src/components/controls/Button';
import { memo, useEffect, useState } from 'react';

export default function Example3() {
  const [timeState, setTimeState] = useState({ startDate: 123, endDate: 456 });
  const [version, setVersion] = useState(0);

  console.log('Parent - timeState:', timeState, version);

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>Example 3:</h2>

      <h3 className='text-lg'>- Description</h3>

      <p>
        Same settings as example 2, which means the Child component is memoed, only now the prop that's being passed is
        non-primitive. It's an object called timeState, which contains a startDate & an endDate.
      </p>

      <h3 className='text-lg'>- Question:</h3>

      <p>What would happen now upon clicking each one of the buttons?</p>

      <div className='flex flex-col gap-6 w-full p-6 border bg-purple-600 rounded-lg'>
        <div>Parent component</div>

        <div className='flex gap-3'>
          <Button onClick={() => setVersion(version + 1)}>Increase version</Button>

          <Button onClick={() => setTimeState((t) => ({ ...t, startDate: t.startDate + 1 }))}>Update timeState</Button>
        </div>

        <ChildWithReferenceMemoed timeState={{ startDate: 123, endDate: 456 }} />
      </div>
    </div>
  );
}

type ChildWithReferenceProps = {
  timeState: {
    startDate: number;
    endDate: number;
  };
};

function ChildWithReference(props: ChildWithReferenceProps) {
  const { timeState } = props;

  console.log('ChildWithReference component rendered');
  console.log('ChildWithReference - timeState:', timeState);

  useEffect(() => {
    console.log('useEffect of ChildWithReference rendered');

    return () => console.log('cleanup of useEffect of ChildWithReference');
  }, [timeState]);

  return <div className='border p-4 h-44 bg-red-600 rounded-lg'>ChildWithReference component</div>;
}

const ChildWithReferenceMemoed = memo(ChildWithReference);
