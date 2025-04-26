export const promiseThrowingAnError = `const throwError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('This is an error thrown from a promise.'));
    }, 1000);
  });
};`;

export const promiseRejectingAnError = `const rejectError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('This is an error rejected from a promise.'));
    }, 1000);
  });
};`;

export const promiseResolvingAnError = `const resolveError = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Error('This is an error resolved from a promise.'));
    }, 1000);
  });
};`;
