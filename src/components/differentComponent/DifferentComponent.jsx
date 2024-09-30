import React, { useContext } from 'react'
import { InputValueContext } from '../../hooks/useContext/contextApi';

const DifferentComponent = () => {

    const props = useContext(InputValueContext);

  return (
    <div className='different-component mt-20'>
        <div>DifferentComponent</div>
        <div className="customInput">
            <label>Enter Input</label>
            <input value={props?.inputValue} type="text" maxLength={20} className="input-field" name="text" onChange={(event) => props?.setInputValue(event.target.value)} />
            <h4 className='mt-20'>value: {props?.inputValue}</h4>
        </div>
    </div>
  )
}

export default DifferentComponent