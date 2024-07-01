import React from 'react'

//TODO : 

function Button({color, text}) {
    const colorVariants = {
      'color-main': 'bg-color-main',
      'color_client': 'bg-color_client',
      'color_red': 'bg-color_red',
      }
    return (
    <button className={`${colorVariants[color]} font-bold rounded-2xl w-32 h-8`}  >{text}</button>
  )
}

export default Button;

