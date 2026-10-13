import { createRoot } from "react-dom/client"
import React, { useState, useEffect } from 'react';


const root = createRoot(document.getElementById("root"))
const reactElement = <h1>Hello from JSX!</h1>

console.log(reactElement)


root.render(
    reactElement
)


function Timer(){
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Mounting / Updating setup: Start a timer
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Unmounting cleanup: Clear the timer when component disappears
    return () => clearInterval(interval);
  }, []); // Empty array means this runs once on mount

  return <p>Timer: {seconds} seconds</p>;
}