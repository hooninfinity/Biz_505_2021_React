import "./App.css";
import CounterInput from "./comps/CounterInput";
import CounterView from "./comps/CounterView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterInput />
        <CounterView />
      </header>
    </div>
  );
}

export default App;
