import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState(false);

  const handleNameSubmit = (e) => {
    e.preventDefault();

    const inputValue = e.target[0].value;

    if (!inputValue) return;

    setName(inputValue);
  };

  if (!name) {
    return (
      <section className="App App-header">
        <h1>What's your name?</h1>
        <form onSubmit={handleNameSubmit}>
          <input />
          <button>➡︎</button>
        </form>
      </section>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, {name}!</h1>
      </header>
    </div>
  );
}

export default App;
