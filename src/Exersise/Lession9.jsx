import React, { useState } from "react";

export default function Lession9() {
  const [count, setCount] = useState(0);

  //hàm tăng
  const handleUp = () => {
    setCount(count + 1);
  };

  //hàm giảm
  const handleDown = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleUp}>Tăng</button>
      <button onClick={handleDown}>Giảm</button>
    </div>
  );
}
