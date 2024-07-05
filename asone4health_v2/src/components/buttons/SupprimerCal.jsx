import React from 'react'

//TODO : make size flexible
//TODO : make the logic

function SupprimerCal({ width='w-32', id, height='h-8'}) {

    return (
    <button className={` ${width} ${id} ${height} color-red font-bold rounded-2xl text-color-white bg-color-red`}  >Supprimer</button>
  )
}

export default SupprimerCal;