import { useState } from 'react';
// import React, { useState } from 'react';

function DisplayApp() {
  // Initialize state to hold the text shown in the display area
  const [displayText, setDisplayText] = useState('0');

  return (
    <div className='grid grid-cols-4 w-fit h-100 my-20 mx-110 bg-gray-200 border border-gray-500'>
      {/* <button onClick={() => setDisplayText('1')} style={{ padding: '10px 20px', fontSize: '16px', border : '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>
        1
      </button>

      <div>
        <strong>Display Area:</strong> {displayText}
      </div> */}
      <input type="text" value="AC" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="+/-" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="%" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="AC"className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="7" onClick="{}" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="8" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="9" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="/" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="4" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="5" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="6" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="+" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="1" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="2" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="3" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="-" className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="0" className=' border border-gray-500 col-span-2 text-center text-3xl'/>
      <input type="text" value="." className=' border border-gray-500 text-center text-3xl'/>
      <input type="text" value="=" className=' border border-gray-500 text-center text-3xl'/>
    </div>
  );
}

export default DisplayApp;
