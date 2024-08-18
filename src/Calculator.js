import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {

  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={() => handleClear()} className="btn clear">C</button>
        <button onClick={() => handleButtonClick("/")} className="btn operator">/</button>
        <button onClick={() => handleButtonClick("*")} className="btn operator">*</button>
        <button onClick={() => handleButtonClick("-")} className="btn operator">-</button>
        <button onClick={() => handleButtonClick("7")} className="btn">7</button>
        <button onClick={() => handleButtonClick("8")} className="btn">8</button>
        <button onClick={() => handleButtonClick("9")} className="btn">9</button>
        <button onClick={() => handleButtonClick("+")} className="btn operator">+</button>
        <button onClick={() => handleButtonClick("4")} className="btn">4</button>
        <button onClick={() => handleButtonClick("5")} className="btn">5</button>
        <button onClick={() => handleButtonClick("6")} className="btn">6</button>
        <button onClick={() => handleButtonClick("1")} className="btn">1</button>
        <button onClick={() => handleButtonClick("2")} className="btn">2</button>
        <button onClick={() => handleButtonClick("3")} className="btn">3</button>
        <button onClick={() => handleEqual()} className="btn equal">=</button>
        <button onClick={() => handleButtonClick("0")} className="btn zero">0</button>
        <button onClick={() => handleButtonClick(".")} className="btn">.</button>
      </div>
    </div>
  );
};

export default Calculator;
