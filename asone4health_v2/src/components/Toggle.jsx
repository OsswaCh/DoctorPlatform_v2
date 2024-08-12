import React, { useState, useEffect } from 'react';
import { Switch } from "@material-tailwind/react";

function Toggle({ checked, onChange, id }) {

  return (
    <Switch
      id={id}
      ripple={true}
      className="h-full w-full checked:bg-color-client-dark shadow-inner-custom checked:shadow-inner-custom-2"
      containerProps={{
        className: "w-11 h-6",
      }}
      circleProps={{
        className: "before:hidden left-0.5 border border-color-border bg-color-client",
      }}
         onChange={onChange}
      checked={checked}
     
    />
  );
}

export default Toggle;