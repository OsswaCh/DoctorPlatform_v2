import React from 'react'
import Activate from '../../buttons/Activate'

function Questionnaire({text, id}) {
  return (
    // total height 10
<div className='border border-color-client-dark rounded-xl min-h-12 px-3 py-2'> 

        <div className="flex flex-row">
        <h2 className="font-bold text-lg text-color-client-dark">Questionnaire:</h2>

            <p className='my-auto mx-2 font-medium'> {text} </p>
            <div className="ml-auto"><Activate id={id} /></div>
            
        </div>

    </div>
  )
}

export default Questionnaire