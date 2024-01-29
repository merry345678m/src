import React, { useState, useEffect } from 'react';

const Counter = ({ start, end, step, intervalDuration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + step;

        if ((step > 0 && nextCount >= end) || (step < 0 && nextCount <= end)) {
          clearInterval(intervalId);
          return end;
        }

        return nextCount;
      });
    }, intervalDuration);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [start, end, step, intervalDuration]);

  return <h1>{count}</h1>;
};

export default Counter;