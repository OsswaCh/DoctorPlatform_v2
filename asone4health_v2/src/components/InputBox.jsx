import React from 'react';

function InputBox(props) {
  return (
    <div>
      <input 
        id={props.id}
        type={props.type} 
        className='w-64 h-9 border-2 rounded-2xl bg-color-input-box shadow-inner-custom' 
        style={{ outline: 'none', padding: '0 10px' }} 
        
      />
    </div>
  );
}

export default InputBox;
