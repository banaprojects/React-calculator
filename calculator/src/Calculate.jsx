import { useState } from "react";

function Calculate() {
  const [firstnumber, setFirstNumber] = useState(" ");
  const [secondnumber, setSecondNumber] = useState(" ");
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(Number(firstnumber) + Number(secondnumber));
    
  };

  const subtract = () => {
    setResult(Number(firstnumber) - Number(secondnumber));
  };

  const multiply = () => {
    setResult(Number(firstnumber) * Number(secondnumber));
  };

  const divide = () => {  
    setResult(Number(firstnumber) / Number(secondnumber));
  };

  const clear = () => {
    setFirstNumber(" ");
    setSecondNumber(" ");
    setResult(0);
  };
  return (
    <div className="calculator-ui">
      <div className="header">
        <h1>ONLINE CALCULATOR</h1>
        <p>Write Once Get All Results</p>
      </div>
      <div className="input-field nber-1">
        <input
          className="input"
          type="text"
          value={firstnumber}
          onChange={(e) => setFirstNumber(e.target.value)}
          placeholder="Enter first number"
        />
      </div>
      <div className="input-field nber-2">
        <input
          className="input"
          type="text"
          value={secondnumber}
          onChange={(e) => setSecondNumber(e.target.value)}
          placeholder="Enter second number"
        />
      </div>
      <div className="result">
        <input
          className="input"
          type="text"
          value={result}
        />
      </div>

      <div className="operators">
        <button className="operator" onClick={add}>Add</button>
        <button className="operator" onClick={subtract} >Subtract</button>
        <button className="operator"  onClick={multiply}>Multiply</button>
        <button className="operator"  onClick={divide}>Divide</button>
        <button className="operator" onClick={clear}>Clear</button>
      </div>
    </div>
  );
}

export default Calculate;
