import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return initialState
    default:
      return state
  }
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = 'Week 6 - Advanced Hooks'
    }
  }, [title])
}

function App() {
  const [count, setCount] = useState(0)
  const [query, setQuery] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)
  const renderCount = useRef(0)
  const inputRef = useRef(null)

  renderCount.current += 1
  useDocumentTitle(`Count: ${count}`)

  const items = ['React', 'JavaScript', 'Hooks', 'useMemo', 'useCallback', 'useReducer']

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    )
  }, [query])

  const increase = useCallback(() => {
    setCount((current) => current + 1)
  }, [])

  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header className="hero">
        <span className="badge">WEEK 6</span>
        <h1>Advanced React Hooks</h1>
        <p>Practice useMemo, useCallback, useRef, useReducer and a custom hook.</p>
        <button onClick={() => setDarkMode((value) => !value)}>
          {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <main className="grid">
        <section className="card">
          <h2>useState + useCallback</h2>
          <div className="value">{count}</div>
          <button onClick={increase}>Increase Count</button>
        </section>

        <section className="card">
          <h2>useReducer</h2>
          <div className="value">{state.count}</div>
          <div className="actions">
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>−</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
          </div>
        </section>

        <section className="card">
          <h2>useRef</h2>
          <input ref={inputRef} placeholder="Click Focus Input" />
          <button onClick={focusInput}>Focus Input</button>
          <p>Component renders: <strong>{renderCount.current}</strong></p>
        </section>

        <section className="card">
          <h2>useMemo</h2>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search hooks..."
          />
          <ul>
            {filteredItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card full">
          <h2>Custom Hook: useDocumentTitle</h2>
          <p>
            The browser tab title updates automatically when the counter changes.
            This demonstrates how reusable logic can be extracted into a custom hook.
          </p>
        </section>
      </main>

      <footer>React Advanced Hooks • Week 6 Practical Project</footer>
    </div>
  )
}

export default App
