import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => setInput((prev) => prev + value);
  const handleCalculation = () => {
    const calculatedResult = eval(input);
    setResult(calculatedResult);
    setHistory((prev) => [
      ...prev,
      { expression: input, result: calculatedResult },
    ]);
    setInput("");
  };
  const handleReset = () => {
    setInput("");
    setResult(0);
  };
  const handleClearHistory = () => setHistory([]);

  const buttons = [
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    ["0", ".", "=", "/"],
  ];

  return (
    <div className="calculator">
      <div className="result">
        <div>Ввод: {input}</div>
        <div>Результат: {result}</div>
      </div>
      <div className="buttons">
        {buttons.map((row, idx) => (
          <div key={idx} className="button-row">
            {row.map((value) => (
              <button
                key={value}
                onClick={() =>
                  value === "=" ? handleCalculation() : handleButtonClick(value)
                }
              >
                {value}
              </button>
            ))}
          </div>
        ))}
        <button onClick={handleReset}>C</button>
      </div>
      <div className="history">
        <h3>История:</h3>
        <ul>
          {history.map((entry, idx) => (
            <li key={idx}>
              {entry.expression} = {entry.result}
            </li>
          ))}
        </ul>
        <button onClick={handleClearHistory}>Очистить историю</button>
      </div>
    </div>
  );
};

export default Calculator;
