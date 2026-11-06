import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState('')

  const handleInput = (val) => {
    setDisplay((prev) => prev + val);
  }

  // const handleClear = () => {
  //   setDisplay('')
  // }

  const handleToggleSign = () => {
    if (!display) return
    try {
      const value = eval(display.replace(/x/g, '*').replace(/÷/g, '/'))
      setDisplay((-1 * value).toString())
    } catch {
      setDisplay('Error')
    }
  }

  const handlePercentage = () => {
    if (!display) return
    try {
      const value = eval(display.replace(/x/g, '*').replace(/÷/g, '/'))
      setDisplay((value / 100).toString())
    } catch {
      setDisplay('Error')
    }
  }

  const handleCalculate = () => {
    if (!display) return
    try {
      const sanitizedExpression = display.replace(/x/g, '*').replace(/÷/g, '/')
      const result = eval(sanitizedExpression)
      setDisplay(String(result))
    } catch {
      setDisplay('Error')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 bg-gray-400  overflow-hidden">
        <input
          type="text" placeholder="0" value={display}
          onChange={(e) => setDisplay(e.target.value)}
          className="w-full bg-gray-600 text-white h-20 text-right text-4xl p-4 border-b border-gray-500 focus:outline-none"
        />

        <div className="grid grid-cols-4 text-center text-black bg-gray-100 h-96 text-2xl font-semibold">
          <button onClick={() => setDisplay('')} className="border-[0.5px] border-gray-400 bg-gray-200">
            AC
          </button>
          <button onClick={handleToggleSign} className="border-[0.5px] border-gray-400 bg-gray-200 ">+/-</button>
          <button onClick={handlePercentage} className="border-[0.5px] border-gray-400 bg-gray-200 ">
            %
          </button>
          <button onClick={() => handleInput('÷')} className="border-[0.5px] border-gray-400 bg-amber-600 text-white ">
            ÷
          </button>

          <button onClick={() => handleInput('7')} className="border-[0.5px] border-gray-400 ">
            7
          </button>
          <button onClick={() => handleInput('8')} className="border-[0.5px] border-gray-400 ">
            8
          </button>
          <button onClick={() => handleInput('9')} className="border-[0.5px] border-gray-400 ">
            9
          </button>
          <button onClick={() => handleInput('x')} className="border-[0.5px] border-gray-400 bg-amber-600 text-white ">
            x
          </button>

          <button onClick={() => handleInput('4')} className="border-[0.5px] border-gray-400 ">
            4
          </button>
          <button onClick={() => handleInput('5')} className="border-[0.5px] border-gray-400 ">
            5
          </button>
          <button onClick={() => handleInput('6')} className="border-[0.5px] border-gray-400 ">
            6
          </button>
          <button onClick={() => handleInput('-')} className="border-[0.5px] border-gray-400 bg-amber-600 text-white ">
            -
          </button>

          <button onClick={() => handleInput('1')} className="border-[0.5px] border-gray-400 ">
            1
          </button>
          <button onClick={() => handleInput('2')} className="border-[0.5px] border-gray-400 ">
            2
          </button>
          <button onClick={() => handleInput('3')} className="border-[0.5px] border-gray-400 ">
            3
          </button>
          <button onClick={() => handleInput('+')} className="border-[0.5px] border-gray-400 bg-amber-600 text-white ">
            +
          </button>

          <button onClick={() => handleInput('0')} className="border-[0.5px] border-gray-400 col-span-2 ">
            0
          </button>
          <button onClick={() => handleInput('.')} className="border-[0.5px] border-gray-400 ">
            .
          </button>
          <button onClick={handleCalculate} className="border-[0.5px] border-gray-400 bg-amber-600 text-white ">
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default App