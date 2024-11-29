import Button from '@src/components/controls/Button';
import { useEffect, useState } from 'react';
/**
 * The setup:
 *
 * You have a parent element (ResetStateWithKey) with useState: myKey.
 * The parent element has a button, that clicking on it sets a new value for myKey.
 * You have a child element, the same child element, rendered twice.
 * One has the "key" attribute on it with the value of myKey attached,
 * and the other one doesn't.
 *
 * Question:
 *
 * What will happen after the button click? (answer below)
 *
 */
export default function ResetStateWithKey() {
  const [myKey, setMyKey] = useState(0);

  function handleReset() {
    setMyKey(myKey + 1);
  }

  return (
    <div className='size-full p-6'>
      <div className='flex gap-3'>
        <Button onClick={handleReset}>Reset</Button>
      </div>

      <div>version: {myKey}</div>

      <Content key={myKey} name='with-key' />
      <Content name='without-key' />
    </div>
  );
}

type ContentProps = {
  name: string;
};

function Content(props: ContentProps) {
  const { name } = props;

  console.log(name, 'rendered');

  useEffect(() => {
    console.log(`useEffect of ${name} invoked`);

    return () => {
      console.log(`useEffect of ${name} cleared`);
    };
  }, []);

  const [userName, setUserName] = useState('Taylor');

  return (
    <div className='flex flex-col gap-4 mt-10'>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className='w-44 h-10 p-2 rounded-sm max-w-full'
      />
      <p>Hello, {userName}.</p>
    </div>
  );
}

/**
 * Answer:
 *
 * After the click, both children would get rendered. BUT!
 * One child would get **updated** - maintaining its state,
 * while the other child would get **re-mounted**, and lose its state.
 *
 * Re-mount also means that all cleanup functions found inside of useEffects
 * would get invoked.
 */
