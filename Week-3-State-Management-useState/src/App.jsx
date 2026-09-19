import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="app">
      <h1>Week 3 - State Management using useState</h1>
      <p className="subtitle">React State Management Demonstration</p>

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
        <h2>Input State</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{name ? `Hello, ${name}!` : "Enter your name above."}</p>
      </div>
    </div>
  );
}

export default App;