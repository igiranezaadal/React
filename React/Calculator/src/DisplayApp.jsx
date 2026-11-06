import { useState } from 'react';
// import React, { useState } from 'react';

function DisplayApp() {
  // Initialize state to hold the text shown in the display area
  const [displayText, setDisplayText] = useState('0');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', marginBottom: '20px solid #ccc' }}>
      <button onClick={() => setDisplayText('1')} style={{ padding: '10px 20px', fontSize: '16px', border : '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>
        1
      </button>

      <div>
        <strong>Display Area:</strong> {displayText}
      </div>
    </div>
  );
}

export default DisplayApp;
