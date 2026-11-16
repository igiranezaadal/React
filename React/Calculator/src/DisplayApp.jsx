import { useState } from 'react';
// import React, { useState } from 'react';

function DisplayApp() {
  // Initialize state to hold the text shown in the display area
  const [displayText, setDisplayText] = useState('0');

  return (
    <>
    
    <div className=' my-20 mx-110 bg-gray-200 border border-gray-500'>
      {/* <button onClick={() => setDisplayText('1')} style={{ padding: '10px 20px', fontSize: '16px', border : '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>
        1
      </button>

      <div>
        <strong>Display Area:</strong> {displayText}
      </div> */}
      <input type="text" name="name" class="bg-gray-600 w-full h-12 pr-2 text-right text-white text-3xl border-none active:border-none  active:bg-gray-600" />
      <div className="grid grid-cols-4 w-fit h-100">
        <input type="text" disabled value="AC" className=' border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="+/-" className=' border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="%" className=' border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="÷"className=' bg-amber-500 border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="7" className=' border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="8" className=' border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="9" className=' border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="/" className='bg-amber-500 border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="4" className=' border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="5" className=' border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="6" className=' border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="+" className='bg-amber-500 border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="1" className=' border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="2" className=' border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="3" className=' border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="-" className='bg-amber-500 border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="0" className=' border border-gray-500 text-center text-3xl col-span-2'/>
        <input type="text" disabled value="." className=' border border-gray-500 text-center text-3xl'/>
        <input type="text" disabled value="=" className='bg-amber-500 border border-gray-500 text-center text-3xl'/>
      </div>
    </div>
    </>
  );
}

export default DisplayApp;
