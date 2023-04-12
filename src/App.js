import logo from "./logo.svg";
import "./App.css";
import Countdown from "./components/CountDown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          M & A <span className="small"> with</span>
        </h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Countdown />
      </main>
    </div>
  );
}

export default App;
