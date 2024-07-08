import React from 'react'

//TODO : make size flexible
//TODO : make into a link not a button
//TODO: text color struct 

function Button({color, text, width='w-32', id, height='h-8', textColor='text-color-text'}) {
    const colorVariants = {
      'color-main': 'bg-color-main',
      'color-client': 'bg-color-client',
      'color-red': 'bg-color-red',
    }

    return (
    <button className={`${colorVariants[color]} ${width} ${id} ${height} ${textColor} font-bold rounded-2xl `}  >{text}</button>
  )
}

export default Button;

