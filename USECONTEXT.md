Context = shared state

```jsx
const AddOneButton = ({ setCounter }) => {

  return (
    <div>
      <button onClick={() => setCounter(v => v + 1)}>
        Add One
      </button>
    <div>
  )
};

const CounterUseState = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <AddOneButton setCounter={setCounter} />
      <Counter counter={counter}>
    </div>
  )
}

const Counter = ({ counter }) => {
  return (
    <>
      Counter: {counter}
    </>    
  )
}

const Container = () => {
  return (
    <div>
      <AddOneButton>
    </div>
  )
}

```

### With using useContext
```jsx

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={useState(0)} />
  )
};

const CounterUseState = () => {
  const [counter, setCounter] = useState(0)
  return (
    <ContainerCotextProvider>
      <AddOneButton setCounter={setCounter} />
      <Counter counter={counter}>
    </ContainerCotextProvider>
  )
};

const AddOneButton = () => {
  const [, setCounter] = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter(v => v + 1)}>
        Add One
      </button>
    <div>
  )
};

const Counter = ({ counter }) => {
  const [counter] = useContext(CounterContext)
  return (
    <>
      Counter: {counter}
    </>    
  )
}
```

### With useContext useReducer
```jsx

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={useReducer(reducer, 0)} />
  )
};

const CounterUseState = () => {
  return (
    <ContainerCotextProvider>
      <AddOneButton setCounter={setCounter} />
      <Counter counter={counter}>
    </ContainerCotextProvider>
  )
};

const AddOneButton = () => {
  const [, dispatch] = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => dispatch({
        "type": "state"
      })}>
        Add One
      </button>
    <div>
  )
};

const Counter = ({ counter }) => {
  const [counter] = useContext(CounterContext)
  return (
    <>
      Counter: {counter}
    </>    
  )
}
```

