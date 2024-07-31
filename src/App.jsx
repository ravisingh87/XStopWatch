import React, { useEffect, useState } from 'react';

const App = () => {
  const [initTimer, setInitTimer] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const formate = (sec) => {
    const min = Math.floor(sec / 60);
    const secds = sec % 60;
    return `${min}:${secds < 10 ? `0${secds}` : secds}`;
  };
  useEffect(() => {
    let timer;
    if (isStarted) {
      timer = setInterval(() => {
        setInitTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isStarted]);
  return (
    <div>
      <h2>Stopwatch</h2>
      <p>Time: {formate(initTimer)}</p>
      <button onClick={() => setIsStarted((prev) => !prev)}>{!isStarted ? 'Start' : 'Stop'}</button>
      <button
        onClick={() => {
          setInitTimer(0);
          setIsStarted(false);
        }}>
        Reset
      </button>
    </div>
  );
};

export default App;
