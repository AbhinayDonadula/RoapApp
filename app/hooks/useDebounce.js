import React from 'react';

function useDebounce(value, delay) {
  const [debouncedVal, setDebouncedVal] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  React.useDebugValue(debouncedVal);

  return debouncedVal;
}

export default useDebounce;
