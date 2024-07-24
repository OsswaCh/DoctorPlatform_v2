import React, { useState } from "react";
import InputBox from "./InputBox";
import MinusSVG from "../SVGs/MinusSVG";
import PlusSVG from "../SVGs/PlusSVG";

//TODO: check if the change minus plus are necessary 
//TODO: remove the Built in number inrement and decrement

function NumberInputBox() {
  const [number, setNumber] = useState(0);
  const handleChangePlus = () => setNumber((prevNumber) => prevNumber + 1);
  const handleChangeMinus = () =>
    setNumber((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : 0));

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setNumber(value);
    }
  };
  return (
    <div className="flex flex-row">
      <PlusSVG handleChangePlus={handleChangePlus} />
      <MinusSVG handleChangeMinus={handleChangeMinus} />
      <InputBox
        id="number"
        type="number"
        height="h-7"
        width="w-32"
        onChange={handleInputChange}
        value={number}
      />
    </div>
  );
}

export default NumberInputBox;
