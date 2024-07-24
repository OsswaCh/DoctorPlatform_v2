import React, { useState } from "react";
import ToogleEyeSlash from "../SVGs/ToogleEyeSlash";

function Activate({ id }) {
  const [active, setActive] = useState(false);
  const toggleButton = () => setActive(!active);

  return (
    <div className=" flex flex-row">
      <ToogleEyeSlash active={active} />
      <button
        onClick={toggleButton}
        id={id}
        className={`${
          active ? "bg-color-red" : "bg-color-client"
        }  min-w-40 h-8 text-color-white px-4 py-auto rounded-full font-semibold`}
      >
        {active ? "DESACTIVER" : "ACTIVER"}
      </button>
    </div>
  );
}

export default Activate;
