import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>likes: {count}</p>
      <button onClick={handleClick}>Add likes</button>
    </div>
  );
}
export default Counter