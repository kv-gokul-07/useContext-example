import React, { useState } from 'react';
import { InputValueContext } from "./contextApi";

const InputValueProvider = (props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <InputValueContext.Provider value={{inputValue, setInputValue}}>
      {props.children}
    </InputValueContext.Provider>
  )
}

export default InputValueProvider