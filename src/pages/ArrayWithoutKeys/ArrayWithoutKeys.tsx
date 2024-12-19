import Button from '@src/components/controls/Button';
import { useState } from 'react';
import { swap } from './logic/swap';

export default function ArrayWithoutKeys() {
  const [items, setItems] = useState([{ i: 10 }, { i: 20 }, { i: 30 }]);

  return (
    <div className='flex flex-col gap-8 p-6 size-full overflow-auto'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-2xl font-bold'>- Description</h3>

        <p>Below is an array of items. They are rendered without mentioning a key property on them.</p>
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className='text-2xl font-bold'>- Question:</h3>

        <p>What is the risk of rendering them without a key?</p>
      </div>

      <div className='bg-slate-900 border rounded-lg p-4'>
        <div className='flex gap-3'>
          <Button
            onClick={() => {
              setItems((prevItems) => {
                const newItems = [...prevItems];

                swap({ arr: newItems, i: 0, j: 2 });

                return newItems;
              });
            }}
          >
            Swap Elements
          </Button>
        </div>

        <div className='flex items-start justify-between gap-10 mt-2'>
          {items.map(({ i }) => (
            <Child key={i} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

type ChildProps = {
  i: number;
};

function Child(props: ChildProps) {
  const { i } = props;

  const [value, setValue] = useState<number>(0);

  return (
    <div className='border rounded-lg p-3'>
      <button
        type='button'
        onClick={() => setValue((v) => v + 1)}
        className='border p-3 bg-blue-600 rounded-md hover:rounded-lg hover:bg-blue-500 mb-4'
      >
        click me
      </button>

      <div>
        prop value is: <span className='text-green-500'>{i}</span>
      </div>
      <div>state value is: {value}</div>
    </div>
  );
}
