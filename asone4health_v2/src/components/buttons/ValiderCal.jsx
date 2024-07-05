import React from 'react'

//TODO : make size flexible
//TODO : make the logic

function ValiderCal({ width='w-32', id, height='h-8'}) {

    return (
    <button className={` ${width} ${id} ${height} color-red font-bold rounded-2xl text-color-text bg-color-client`}  >Valider</button>
  )
}

export default ValiderCal;