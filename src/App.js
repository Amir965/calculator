import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div className="App">
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button className="highlighing" onClick={clear} id="clear">
            clear
          </button>
          <button className="highlighing" onClick={backspace} id="backspace">
            c
          </button>
          <button className="highlighing" onClick={handleClick} name="/">
            &divide;
          </button>
          <button onClick={handleClick} name="7">
            7
          </button>
          <button onClick={handleClick} name="8">
            8
          </button>
          <button onClick={handleClick} name="9">
            9
          </button>
          <button className="highlighing" onClick={handleClick} name="*">
            &times;
          </button>
          <button onClick={handleClick} name="4">
            4
          </button>
          <button onClick={handleClick} name="5">
            5
          </button>
          <button onClick={handleClick} name="6">
            6
          </button>
          <button className="highlighing" onClick={handleClick} name="-">
            &ndash;
          </button>
          <button onClick={handleClick} name="1">
            1
          </button>
          <button onClick={handleClick} name="2">
            2
          </button>
          <button onClick={handleClick} name="3">
            3
          </button>
          <button className="highlighing" onClick={handleClick} name="+">
            +
          </button>
          <button onClick={handleClick} name="0">
            0
          </button>
          <button onClick={handleClick} name=".">
            .
          </button>
          <button className="highlighing" onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
