import React from 'react'

function InputBox(props) {
  return (
    <div>
      <input type={props.type} className='w-64 h-9 border-2 rounded-2xl border-none bg-color-input-box shadow-inner-custom' />
    </div>
  )
}

export default InputBox;
