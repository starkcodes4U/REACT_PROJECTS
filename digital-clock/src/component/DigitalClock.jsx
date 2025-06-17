import React, { useState, useEffect } from "react";

const formatTime = (date) => {
  // Extract HH:MM:SS from ISO string
  return date.toTimeString().split(" ")[0]; // "HH:MM:SS"
};

const DigitalClock = () => {
  const [time, setTime] = useState(formatTime(new Date()));
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(formatTime(new Date()));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleClock = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <div>
      <h2>Current Time:</h2>
      <h1>{time}</h1>
      <button onClick={toggleClock}>
        {isRunning ? "Stop Clock" : "Start Clock"}
      </button>
    </div>
  );
};

export default DigitalClock;
