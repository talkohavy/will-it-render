import Button from '@src/components/controls/Button';
import Input from '@src/components/controls/Input';
import { useEffect, useState } from 'react';

export default function Example1() {
  const [age, setAge] = useState(12);
  const [firstName, setFirstName] = useState('');
  const [version, setVersion] = useState(0);

  console.log('Parent - firstName, age & version:', firstName, age, version);

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>Example 1:</h2>

      <h3 className='text-lg'>- Description</h3>

      <p>
        The following Parent element has a state of age, firstName, and version. Its Child component accepts 2 of those
        - age & firstName - as props. The Child component has a useEffect, which depends on firstName. The Parent
        element has 3 buttons to update each piece of the state.
      </p>

      <h3 className='text-lg'>- Question:</h3>

      <p>What would happen upon clicking each one of them?</p>

      <div className='flex flex-col gap-6 w-full p-6 border bg-purple-600 rounded-lg'>
        <div>Parent component</div>

        <div className='flex gap-3'>
          <Button onClick={() => setAge(age + 1)}>Increase age</Button>

          <Input value={firstName} setValue={setFirstName} placeholder='First name' className='text-black' />

          <Button onClick={() => setVersion(version + 1)}>Increase version</Button>
        </div>

        <ChildWithPrimitives age={age} firstName={firstName} />
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

  return <div className='border p-4 h-44 bg-red-600 rounded-lg'>ChildWithPrimitives component</div>;
}
