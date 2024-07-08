import React, { useState } from "react";
import InputBox from "./InputBox";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor "
        className="size-6 text-color-client  hover:text-color-client-dark transition-colors cursor-pointer mr-4"
        onClick={handleChangePlus}
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
          clipRule="evenodd"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6 text-color-client hover:text-color-client-dark  transition-colors  cursor-pointer mr-4"
        onClick={handleChangeMinus}
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
          clipRule="evenodd"
        />
      </svg>

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
