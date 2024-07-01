import React from "react";
import Logo2 from "../../src/assests/images/Logo_arriere_transparent.png";

//TODO : fix the full size circle / make the others more synamic

function CircleLogo({size}) {
  //default size
  const sizeVariants = {
    'small': 'w-16 h-16',
    'medium': 'w-96 h-96',
    'medium-large': 'w-[40rem] h-[40rem]',
    'large': 'w-[50rem] h-[50rem]',
    }

    const sizeClass = sizeVariants[size] || sizeVariants.medium;  
    
  return (
    <div className="w-screen h-screen">
      <div className={`${sizeClass } rounded-full border-solid border-[15px] border-color-main bg-color-white overflow-hidden flex items-center justify-center`}>
        <img src={Logo2} alt="logo" className="" />
      </div>
    </div>
  );
}

export default CircleLogo;
