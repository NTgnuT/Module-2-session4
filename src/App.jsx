import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseState_Comp from "./component/useState/UseState_Comp";
import UseContext_Comp from "./component/useContext/useContext_Comp";
import Lession9 from "./Exersise/Lession9";
import Lession10 from "./Exersise/Lession10";
import UseEffect from "./component/useEffect/UseEffect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseState_Comp /> */}
      {/* <UseContext_Comp /> */}
      {/* <UseEffect /> */}
      {/* <Lession9 /> */}
      <Lession10 />
    </>
  );
}

export default App;
