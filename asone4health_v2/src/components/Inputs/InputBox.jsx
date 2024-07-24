import React from 'react';

function InputBox({id, type, height="h-9", width="w-64", onChange, value, name}) {
  return (
    <div>
      <input 
        id={id}
        type={type} 
        className={`${height} ${width} border-2 rounded-2xl bg-color-input-box shadow-inner-custom invalid:border-color-red`} 
        style={{ outline: 'none', padding: '0 10px' }} 
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
}

export default InputBox;
