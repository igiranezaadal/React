import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-amber-50 mb-10'>Adal</h1> */}
      <div className="flex flex-1/2 border border-gray-900">
          <div className="container">
              <input type="text" placeholder='Enter Number'
              className="w-full bg-gray-500 text-white h-20 text-right text-3xl p-2"
              />
              <div className="grid grid-cols-4 gap-2 text-center text-black bg-gray-100 h-80 text-2xl font-bold">
                <span>AC</span>
                <span>+/-</span>
                <span>%</span>
                <span className='bg-amber-600'>÷</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span className='bg-amber-600'>x</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span className='bg-amber-600'>-</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span className='bg-amber-600'>+</span>
                <span>0</span>
                <span>.</span>
                <span className='bg-amber-600'>=</span>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
