import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    if (displayValue === '0') {
      setDisplayValue(number);
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    if (!isNaN(parseInt(key))) {
      handleNumberClick(key);
    } else if (key === '.') {
      handleDecimalClick();
    } else if (['+', '-', '*', '/'].includes(key)) {
      handleOperatorClick(key);
    } else if (key === 'Enter' || key === '=') {
      handleEqualsClick();
    } else if (key === 'Backspace') {
      handleClearClick();
    }
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setFirstOperand(parseFloat(displayValue));
    setDisplayValue(displayValue + ' ' + op + ' ');
  };

  const handleEqualsClick = () => {
    if (operator && firstOperand) {
      let result;
      const secondOperand = parseFloat(displayValue.split(' ').pop());
      switch (operator) {
        case '+':
          result = firstOperand + secondOperand;
          break;
        case '-':
          result = firstOperand - secondOperand;
          break;
        case '*':
          result = firstOperand * secondOperand;
          break;
        case '/':
          if (secondOperand === 0) {
            alert('Erreur : Division par zéro');
            return;
          }
          result = firstOperand / secondOperand;
          break;
        default:
          return;
      }
      setDisplayValue(result.toString());
      setFirstOperand(null);
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
  };

  return (
    <div id="calculator" onKeyDown={handleKeyDown} tabIndex={0}>
      <input type="text" id="display" value={displayValue} readOnly />
      <button className="clear" onClick={handleClearClick}>C</button>
      <button onClick={() => handleNumberClick('7')}>7</button>
      <button onClick={() => handleNumberClick('8')}>8</button>
      <button onClick={() => handleNumberClick('9')}>9</button>
      <button className="operator" onClick={() => handleOperatorClick('/')}>
        /
      </button>
      <button onClick={() => handleNumberClick('4')}>4</button>
      <button onClick={() => handleNumberClick('5')}>5</button>
      <button onClick={() => handleNumberClick('6')}>6</button>
      <button className="operator" onClick={() => handleOperatorClick('*')}>
        *
      </button>
      <button onClick={() => handleNumberClick('1')}>1</button>
      <button onClick={() => handleNumberClick('2')}>2</button>
      <button onClick={() => handleNumberClick('3')}>3</button>
      <button className="operator" onClick={() => handleOperatorClick('-')}>
        -
      </button>
      <button onClick={() => handleNumberClick('0')}>0</button>
      <button onClick={handleDecimalClick}>.</button>
      <button className="operator" onClick={() => handleOperatorClick('+')}>
        +
      </button>
      <button className="equal" onClick={handleEqualsClick}>
        =
      </button>
    </div>
  );
};

export default Calculator;