export const keys = obj => Object.keys(obj);

export const silentError = () => {
  const original = console.error;
  const error = jest.fn();

  console.error = error;

  return {
    error,
    restore: () => {
      console.error = original;
    },
  };
};
