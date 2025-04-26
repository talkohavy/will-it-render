import Button from '@src/components/controls/Button';
import { promiseRejectingAnError, promiseResolvingAnError, promiseThrowingAnError } from './constants';

export default function ErrorInAPromisePage() {
  return (
    <div className='flex flex-col gap-8 p-6 size-full overflow-auto'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-2xl font-bold'>- Description</h3>

        <p>
          What is the difference between a promise throwing an error, v.s. a promise rejecting with an error, v.s. a
          promise resolving with an error?
        </p>

        <p className='mt-6'>A promise throwing an error:</p>

        <pre className='bg-slate-700 p-4 rounded-md border'>
          <code>{promiseThrowingAnError}</code>
        </pre>

        <p className='mt-6'>A promise rejecting with an error:</p>

        <pre className='bg-slate-700 p-4 rounded-md border'>
          <code>{promiseRejectingAnError}</code>
        </pre>

        <p className='mt-6'>A promise resolving with an error:</p>

        <pre className='bg-slate-700 p-4 rounded-md border'>
          <code>{promiseResolvingAnError}</code>
        </pre>
      </div>

      <div className='bg-slate-900 border rounded-lg p-4'>
        <div className='flex gap-3'>
          <Button
            onClick={async () => {
              function throwError(): Promise<void> {
                return new Promise((_, reject) => {
                  reject(new Error('This is an error thrown from a promise.'));
                  _();
                });
              }

              try {
                const result = await throwError();
                console.log('Promise resolved with:', result);
              } catch (error) {
                console.error('Caught error:', error);
              }
            }}
          >
            A promise throwing an error
          </Button>

          <Button
            onClick={async () => {
              function rejectError() {
                return new Promise((_, reject) => {
                  reject(new Error('This is an error rejected from a promise.'));
                });
              }

              try {
                const result = await rejectError();
                console.log('Promise resolved with:', result);
              } catch (error) {
                console.error('Caught error:', error);
              }
            }}
          >
            A promise rejecting an error
          </Button>

          <Button
            onClick={async () => {
              function resolveError() {
                return new Promise((resolve) => {
                  resolve(new Error('This is an error resolved from a promise.'));
                });
              }

              try {
                const result = await resolveError();
                console.log('Promise resolved with:', result);
              } catch (error) {
                console.error('Caught error:', error);
              }
            }}
          >
            A promise resolving an error
          </Button>
        </div>
      </div>
    </div>
  );
}

/**
 * DETAILED EXPLANATION
 *
 * So why does throwing an error inside a promise, and rejecting with an error does the same thing?
 *
 * The answer is that when an error is thrown inside a promise, it is caught by the Promise's constructor and
 * automatically rejected. This is why you can catch the error using .catch() or try/catch.
 *
 * It is equivalent to the following code:
 *
 * function example() {
 *   try {
 *     throw new Error('This is an error thrown from a promise.');
 *   } catch (error) {
 *     console.error('Caught error:', error);
 *   }
 * }
 *
 */
