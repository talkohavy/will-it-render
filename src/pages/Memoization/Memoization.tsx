import { type ReactNode, useState } from 'react';
import RadioTabs from '@src/components/controls/RadioGroup/RadioTabs';
import Example1 from './Examples/Example1';
import Example2 from './Examples/Example2';
import Example3 from './Examples/Example3';
import type { RadioOption } from '@src/components/controls/RadioGroup/types';

const exampleTabs: Array<RadioOption<() => ReactNode>> = [
  { value: 0, label: 'Example 1', item: Example1 },
  { value: 1, label: 'Example 2', item: Example2 },
  { value: 2, label: 'Example 3', item: Example3 },
];

export default function Memoization() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const ComponentExample = exampleTabs[selectedTabIndex]!.item!;

  return (
    <div className='flex flex-col gap-8 size-full p-4'>
      <RadioTabs
        value={selectedTabIndex}
        setValue={setSelectedTabIndex}
        options={exampleTabs}
        className='flex gap-px'
      />

      <ComponentExample />
    </div>
  );
}
