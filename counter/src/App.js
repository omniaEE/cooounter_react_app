import "./App.css";
import CounterFun from "./components/CounterFun/index.jsx";
import CounterClass from "./components/CounterClass/index.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterFun />
        <CounterClass />
      </header>
    </div>
  );
}

export default App;
