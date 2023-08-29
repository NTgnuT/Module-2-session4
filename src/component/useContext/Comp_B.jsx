import React, { useContext } from "react";
import { ThemeContext } from "./useContext_Comp";

export default function Comp_B() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p className={theme}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        blanditiis accusamus officia adipisci aperiam, velit aliquam inventore.
        Ducimus sint molestias voluptates expedita optio error eveniet repellat
        harum, doloremque, facere quos?
      </p>
    </div>
  );
}
