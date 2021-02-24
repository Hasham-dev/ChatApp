import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('abubaker')
  if (name)
    return <div />

  const myFunc = (a, b, c, d) => {

  }

  return (
    <div className="App">
      <header className="App-header">
        Hello {name}
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahhdddddabbbhhhhhjjj

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
