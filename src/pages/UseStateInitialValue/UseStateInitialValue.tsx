import Button from '@src/components/controls/Button';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

/**
 * The setup:
 *
 * We are listening on updates of the "state" object on the history.location,
 * and we take that state and use it as the initial value for the useState of "value".
 *
 * There's a button, that clicking on it updates the history.location.state.
 *
 * The question:
 *
 * What would happen after the click of the button? (answer below)
 *
 */
export default function UseStateInitialValue() {
  const navigateTo = useNavigate();

  const { state } = useLocation();

  console.log('state is:', state);

  // @ts-ignore
  // eslint-disable-next-line
  const [value, setValue] = useState({ value: state?.value ?? 123 });

  return (
    <div className='size-full p-6'>
      <div className='flex gap-3'>
        <Button onClick={() => navigateTo('/', { state: { value: Math.random() } })}>Change state.value</Button>
      </div>

      <div className='mt-20 text-white'>value is: {value.value}</div>
    </div>
  );
}

/**
 * Answer:
 *
 * The value of "value" would stay the same as it was on the initial render.
 * useState ignores the value after the initial render. Doesn't matter if the value
 * is a primitive, an object, an array, or a value that got returned from a function.
 *
 * Question 2: (follow-up question)
 *
 * Then why even use the array form for initializing a useState?
 *
 * Answer 2:
 *
 * Because if you were to do `useState(doSomething());`, your doSomething function
 * would be invoked on every render. It is true that useState would only use the value
 * returned by the first render, and ignore subsequent invokes, but that still means
 * that you're calling out many unnecessary invocations, hindering performance.
 * If your doSomething function makes heavy calculations, they would damage performance significantly.
 *
 * Doing `useState(doSomething)`, makes sure you're only running once, on mount, and that's it.
 * On component updates (componentDidUpdate), doSomething would not be invoked.
 *
 */
