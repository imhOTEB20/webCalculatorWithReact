import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const handleButtonClick = (valor) => {
    if (valor === '=') {
      try {
        setResultado(eval(input));
      } catch {
        setResultado('Error');
      }
    } else if (valor === 'C') {
      setInput('');
      setResultado('');
    } else {
      setInput(input + valor);
    }
  };

  return (
    <div className="calculadora">
      <input type="text" value={input} readOnly />
      <label style={{ fontSize: '2em', marginTop: '10px', display: 'block' }}>
        {resultado}
      </label>
      <div className="botones">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((val) => (
          <Button key={val} valor={val} accion={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
