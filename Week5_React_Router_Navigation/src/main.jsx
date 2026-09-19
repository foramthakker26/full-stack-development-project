import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return <section><h2>Welcome to the Home Page</h2><p>React Router navigation demonstration.</p></section>;
}

function About() {
  return <section><h2>About React Router</h2><p>React Router helps create navigation between views.</p></section>;
}

function Contact() {
  return <section><h2>Contact Page</h2><p>This is the Contact page.</p></section>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Week 5 - React Router & Navigation</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
