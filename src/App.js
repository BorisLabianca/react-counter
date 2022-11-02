import "./App.css";
import { useState } from "react";

function App() {
  const [counter, modifyCounter] = useState(0);
  // const [counter, removeFromCounter] = useState(0);
  // const [counter, resetCounter] = useState(0);
  return (
    <div className="App">
      <header>
        <i class="fa-solid fa-calculator"></i> <span>React Counter</span>
      </header>
      <main>
        <div className="counter-container">
          <div className={counter === 0 && "hidden"}>
            <i
              onClick={() => {
                modifyCounter(counter - 1);
              }}
              class="fa-solid fa-minus"
            ></i>
          </div>

          <div className="counter">{counter}</div>
          <div className={counter === 10 && "hidden"}>
            <i
              onClick={() => {
                modifyCounter(counter + 1);
              }}
              class="fa-solid fa-plus"
            ></i>
          </div>
        </div>
        <div className="button-div">
          <button
            onClick={() => {
              modifyCounter(0);
            }}
          >
            Reset
          </button>
        </div>
      </main>
      <footer>
        Made with{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>{" "}
        at{" "}
        <a href="https://www.lereacteur.io/" target="_blank" rel="noreferrer">
          Le Reacteur
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/boris-labianca-01a52871/"
          target="_blank"
          rel="noreferrer"
        >
          Boris
        </a>
      </footer>
    </div>
  );
}

export default App;
