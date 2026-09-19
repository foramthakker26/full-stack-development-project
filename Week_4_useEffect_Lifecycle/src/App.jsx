import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState("Welcome to Week 4");

  useEffect(() => {
    console.log("Component mounted");

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    setMessage(`Count updated to ${count}`);
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div className="app">
      <h1>Week 4 - useEffect & Lifecycle</h1>
      <p className="subtitle">
        React useEffect and Component Lifecycle Demonstration
      </p>

      <div className="card">
        <h2>Counter</h2>
        <p className="count">{count}</p>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>

      <div className="card">
        <h2>Timer using useEffect</h2>
        <p className="timer">{seconds} seconds</p>
        <p>{message}</p>
      </div>

      <div className="info">
        <h2>Lifecycle Concepts</h2>
        <p>✓ Component Mounting</p>
        <p>✓ State Updating</p>
        <p>✓ useEffect Dependency</p>
        <p>✓ Cleanup Function</p>
      </div>
    </div>
  );
}

export default App;
