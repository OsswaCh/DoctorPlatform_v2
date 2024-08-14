import React, {useState} from "react";

//TODO : make size flexible
//TODO : make into a link not a button
//TODO: text color struct

function Button({
  color,
  text,
  width = "w-32",
  id,
  height = "h-8",
  textColor = "text-color-text",
  type = "submit",
  clickedColor, 
  isActive,
  onClick,
}) {
  const colorVariants = {
    "color-main": "bg-color-main hover:bg-color-client",
    "color-client": "bg-color-client hover:bg-color-client-dark",
    "color-red": "bg-color-red",
  };

//const [isClicked, setIsClicked] = useState(false)


const button_color = isActive ? clickedColor : colorVariants[color];

  return (
    <button
      className={`${button_color} ${width} ${id} ${height} ${textColor} font-bold rounded-2xl  `}
      type={type}
      onClick={onClick}
      id={id}

    >
      {text}
    </button>
  );
}

export default Button;
 