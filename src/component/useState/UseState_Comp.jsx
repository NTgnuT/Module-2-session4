import React, { useState } from "react";

const totals = [100, 200, 300, 400];

export default function UseState_Comp() {
  const [count, setCount] = useState(() => {
    // đối với initial state là 1 callback thì nó sẽ lấy giá trị được return từ callback là initialState
    const totalCount = totals.reduce((prevValue, currentValue) => {
      console.log(prevValue);
      console.log(currentValue);
      return prevValue + currentValue;
    }, 0);
    return totalCount;
  });

  console.log("re-render");

  // hàm xử lý tăng
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>Click</button>
    </>
  );
}
