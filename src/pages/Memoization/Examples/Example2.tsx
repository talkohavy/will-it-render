import Button from '@src/components/controls/Button';
import Input from '@src/components/controls/Input';
import { memo, useEffect, useState } from 'react';

export default function Example2() {
  const [age, setAge] = useState(24);
  const [firstName, setFirstName] = useState('');
  const [version, setVersion] = useState(0);

  console.log('Parent - firstName, age & version:', firstName, age, version);

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>Example 2:</h2>

      <h3 className='text-lg'>- Description</h3>

      <p>Same settings as example 1, only now the Child component is memoed.</p>

      <h3 className='text-lg'>- Question:</h3>

      <p>What would happen now upon clicking each one of the buttons?</p>

      <div className='flex flex-col gap-6 w-full p-6 border bg-purple-600 rounded-lg'>
        <div>Parent component</div>

        <div className='flex gap-3'>
          <Button onClick={() => setAge(age + 1)}>Increase age</Button>

          <Input value={firstName} setValue={setFirstName} placeholder='First name' className='text-black' />

          <Button onClick={() => setVersion(version + 1)}>Increase version</Button>
        </div>

        <ChildWithPrimitivesMemoed age={age} firstName={firstName} />
      </div>
    </div>
  );
}

type ChildWithPrimitivesProps = {
  firstName: string;
  age: number;
};

function ChildWithPrimitives(props: ChildWithPrimitivesProps) {
  const { firstName, age } = props;

  console.log('ChildWithPrimitives component rendered');
  console.log('ChildWithPrimitives - firstName & age:', firstName, age);

  useEffect(() => {
    console.log('useEffect of ChildWithPrimitives rendered');

    return () => console.log('cleanup of useEffect of ChildWithPrimitives');
  }, [firstName]);

  return <div className='border p-4 h-44 bg-red-600 rounded-lg'>Memoed Child with primitives</div>;
}

const ChildWithPrimitivesMemoed = memo(ChildWithPrimitives);
