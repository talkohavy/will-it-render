import { useState } from 'react';
import Button from '../../components/controls/Button';
import { useDarkTheme } from '../../providers/DarkThemeProvider/DarkThemeContext';

// Custom Error class WITHOUT Error.captureStackTrace
class BasicError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BasicError';
  }
}

// Custom Error class WITH Error.captureStackTrace
class EnhancedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EnhancedError';

    // This will remove the constructor call from the stack trace
    // and make the stack trace start from the caller of EnhancedError
    Error.captureStackTrace(this);
  }
}

export default function CustomErrorPage() {
  const { isDarkMode } = useDarkTheme();
  const [errorInfo, setErrorInfo] = useState<{ name: string; message: string; stack: string | undefined } | null>(null);

  const handleBasicError = () => {
    try {
      throw new BasicError('This is a basic error without captureStackTrace');
    } catch (err) {
      if (err instanceof Error) {
        setErrorInfo({
          name: err.name,
          message: err.message,
          stack: err.stack,
        });
      }
    }
  };

  const handleEnhancedError = () => {
    try {
      throw new EnhancedError('This is an enhanced error with captureStackTrace');
    } catch (err) {
      if (err instanceof Error) {
        setErrorInfo({
          name: err.name,
          message: err.message,
          stack: err.stack,
        });
      }
    }
  };

  const clearError = () => {
    setErrorInfo(null);
  };

  return (
    <div className={`p-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
      <h1 className='text-2xl font-bold mb-4'>Custom Error Page: captureStackTrace Demo</h1>

      <div className='flex gap-4 mb-4'>
        <Button onClick={handleBasicError} className='bg-red-500 hover:bg-red-600 active:bg-red-500'>
          Throw Basic Error
        </Button>

        <Button onClick={handleEnhancedError} className='bg-blue-500 hover:bg-blue-600 active:bg-blue-500'>
          Throw Enhanced Error
        </Button>

        {errorInfo && (
          <Button onClick={clearError} className='bg-gray-500 hover:bg-gray-600 active:bg-gray-500'>
            Clear Error
          </Button>
        )}
      </div>

      {errorInfo && (
        <div
          className={`mt-6 p-4 border rounded ${
            isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-gray-50'
          }`}
        >
          <h2 className='text-xl font-semibold mb-2'>
            {errorInfo.name}: {errorInfo.message}
          </h2>

          <div className='mt-4'>
            <h3 className='text-lg font-medium mb-2'>Stack Trace:</h3>
            <pre
              className={`p-3 rounded overflow-x-auto text-sm ${
                isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'
              }`}
            >
              {errorInfo.stack}
            </pre>
          </div>

          <div
            className={`mt-4 p-3 rounded border ${
              isDarkMode
                ? 'bg-yellow-900 border-yellow-800 text-yellow-200'
                : 'bg-yellow-100 border-yellow-300 text-yellow-800'
            }`}
          >
            {errorInfo.name === 'EnhancedError' ? (
              <p>
                <strong>Notice:</strong> With{' '}
                <code className={isDarkMode ? 'text-yellow-300' : 'text-yellow-700'}>
                  Error.captureStackTrace(this, EnhancedError)
                </code>
                , the constructor call is removed from the stack trace. This makes the stack trace cleaner and more
                relevant by starting from where the error was actually thrown.
              </p>
            ) : (
              <p>
                <strong>Notice:</strong> Without{' '}
                <code className={isDarkMode ? 'text-yellow-300' : 'text-yellow-700'}>Error.captureStackTrace</code>, the
                stack trace includes the error constructor call and all internal details, making it harder to identify
                where the error was actually thrown from your code.
              </p>
            )}
          </div>
        </div>
      )}

      <div className={`mt-8 p-4 rounded ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100'}`}>
        <h2 className='text-xl font-semibold mb-2'>What is Error.captureStackTrace?</h2>
        <p className='mb-2'>
          <code
            className={`${
              isDarkMode ? 'bg-gray-900 text-yellow-300 p-1 rounded' : 'bg-gray-200 text-red-600 p-1 rounded'
            }`}
          >
            Error.captureStackTrace(error, constructorOpt)
          </code>{' '}
          is a Node.js method that captures the current call stack and assigns it to the stack property of the provided
          error object.
        </p>
        <p className='mb-2'>
          The second parameter (
          <code
            className={`${
              isDarkMode ? 'bg-gray-900 text-yellow-300 p-1 rounded' : 'bg-gray-200 text-red-600 p-1 rounded'
            }`}
          >
            constructorOpt
          </code>
          ) tells the method where to stop capturing the stack trace. When you pass your error class as the second
          parameter, it will exclude the constructor function and anything above it.
        </p>
        <p>This makes the stack trace more readable and relevant by removing internal implementation details.</p>
      </div>
    </div>
  );
}
