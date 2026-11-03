import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState('0')
  const handleNumber = (num) => {
    setDisplay(num);
  }
  // handleOperator = (operator) => {
  // }

  return (
    <>
      <div className="flex justify-center items-center w-fit" >
          <div className="justify-center items-center w-full h-100 bg-gray-400 rounded-lg">
              <input type="text" placeholder='Enter Number'
              className="w-auto bg-gray-500 text-white h-20 text-right text-3xl p-2"/>

              <div className="grid grid-cols-4 border text-center text-black bg-gray-100 h-100 text-3xl">
                <button onclick={() => handleOperator('AC')} className='border-[0.5px] border-gray-500 text-center'>AC</button>
                <button onclick={() => handleOperator('+/-')} className='border border-gray-500'>+/-</button>
                <button onclick={() => handleOperator('%')} className='border border-gray-500'>%</button>
                <button onclick={() => handleOperator('÷')} className='border  border-gray-500 bg-amber-600 text-white'>÷</button>
                <button onclick={() => handleNumber('7')} className='border border-gray-500'>7</button>
                <button onclick={() => handleNumber('8')} className='border border-gray-500'>8</button>
                <button onclick={() => handleNumber('9')} className='border border-gray-500'>9</button>
                <button onclick={() => handleOperator('x')} className='border-b border-gray-500 bg-amber-600 text-white'>x</button>
                <button onclick={() => handleNumber('4')} className='border border-gray-500'>4</button>
                <button onclick={() => handleNumber('5')} className='border border-gray-500'>5</button>
                <button onclick={() => handleNumber('6')} className='border border-gray-500'>6</button>
                <button onclick={() => handleOperator('-')} className='border-b border-gray-500 bg-amber-600 text-white'>-</button>
                <button onclick={() => handleNumber('1')} className='border border-gray-500'>1</button>
                <button onclick={() => handleNumber('2')} className='border border-gray-500'>2</button>
                <button onclick={() => handleNumber('3')} className='border border-gray-500'>3</button>
                <button onclick={() => handleOperator('+')} className='border-b border-gray-500 bg-amber-600 text-white'>+</button>
                <button onclick={() => handleNumber('0')} className='border border-gray-500 col-span-2'>0</button>
                <button onclick={() => handleOperator('.')} className='border border-gray-500'>.</button>
                <button onclick={() => handleOperator('=')} className='border-b border-gray-500  bg-amber-600 text-white'>=</button>
              </div>

          </div>
      </div>
    </>
  )
}

export default App



// import React, { useState } from 'react';
// // import './Calculator.css';

// export default function Calculator() {
//   const [display, setDisplay] = useState('0');
//   const [equation, setEquation] = useState('');
//   const [isFinished, setIsFinished] = useState(false);

//   // Appends digits and decimal points safely
//   const handleNumber = (digit) => {
//     if (display === '0' || isFinished) {
//       setDisplay(digit);
//       setIsFinished(false);
//     } else {
//       if (digit === '.' && display.includes('.')) return; // Prevent double decimals
//       setDisplay(display + digit);
//     }
//   };

//   // Handles operational buttons (+, -, *, /)
//   const handleOperator = (operator) => {
//     setEquation(`${display} ${operator} `);
//     setIsFinished(true);
//   };

//   // Evaluates the equation safely without eval()
//   const handleCalculate = () => {
//     if (!equation || isFinished) return;

//     const fullExpression = equation + display;
//     const parts = fullExpression.split(' ');
    
//     if (parts.length < 3) return;

//     const operand1 = parseFloat(parts[0]);
//     const operator = parts[1];
//     const operand2 = parseFloat(parts[2]);

//     let result = 0;
//     switch (operator) {
//       case '+': result = operand1 + operand2; break;
//       case '-': result = operand1 - operand2; break;
//       case '×': result = operand1 * operand2; break;
//       case '÷': 
//         result = operand2 === 0 ? 'Error' : operand1 / operand2; 
//         break;
//       default: return;
//     }

//     // Format output to prevent long floating point decimals
//     setDisplay(typeof result === 'number' ? Math.round(result * 100000) / 100000 : result);
//     setEquation('');
//     setIsFinished(true);
//   };

//   // Resets all state values back to zero
//   const handleClear = () => {
//     setDisplay('0');
//     setEquation('');
//     setIsFinished(false);
//   };

//   return (
//     <div className="calc-container">
//       <div className="calc-card">
//         <div className="calc-screen">
//           <div className="calc-history">{equation}</div>
//           <div className="calc-main-display">{display}</div>
//         </div>
        
//         <div className="calc-grid">
//           <button onClick={handleClear} className="btn btn-action span-two">AC</button>
//           <button onClick={() => handleOperator('÷')} className="btn btn-operator">÷</button>
//           <button onClick={() => handleOperator('×')} className="btn btn-operator">×</button>

//           <button onClick={() => handleNumber('7')} className="btn">7</button>
//           <button onClick={() => handleNumber('8')} className="btn">8</button>
//           <button onClick={() => handleNumber('9')} className="btn">9</button>
//           <button onClick={() => handleOperator('-')} className="btn btn-operator">-</button>

//           <button onClick={() => handleNumber('4')} className="btn">4</button>
//           <button onClick={() => handleNumber('5')} className="btn">5</button>
//           <button onClick={() => handleNumber('6')} className="btn">6</button>
//           <button onClick={() => handleOperator('+')} className="btn btn-operator">+</button>

//           <button onClick={() => handleNumber('1')} className="btn">1</button>
//           <button onClick={() => handleNumber('2')} className="btn">2</button>
//           <button onClick={() => handleNumber('3')} className="btn">3</button>
//           <button onClick={handleCalculate} className="btn btn-operator row-span-two">=</button>

//           <button onClick={() => handleNumber('0')} className="btn span-two">0</button>
//           <button onClick={() => handleNumber('.')} className="btn">.</button>
//         </div>
//       </div>
//     </div>
//   );
// }
