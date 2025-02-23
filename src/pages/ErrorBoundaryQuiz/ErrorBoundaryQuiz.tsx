import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

export default function ErrorBoundaryQuiz() {
  return (
    <div>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

function BuggyComponent() {
  const [_errorCatcher, setErrorCatcher] = useState(0);
  console.log('i rendered');

  const onClick = () => {
    setErrorCatcher(-1);
    throw new Error('I crashed!');
  };
  return (
    <button type='button' onClick={onClick} className='border p-4 rounded-md'>
      I am a Buggy Component
      {adasd}
    </button>
  );
}
