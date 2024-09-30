import { useContext } from "react";
import ChildComponent from "../child component/ChildComponent";
import { InputValueContext } from "../../hooks/useContext/contextApi";
import "./parentComponent.css";

const ParentComponent = () => {

  const props = useContext(InputValueContext);

  return (
        <div className='wrapper'>
          <div className='parent-component'>
            Parent component
              <div className="customInput">
                <label>Enter Input</label>
                <input value={props?.inputValue} type="text" maxLength={20} className="input-field" name="text" onChange={(event) => props?.setInputValue(event.target.value)} />
                <h4 className='mt-20'>value: {props?.inputValue}</h4>
              </div>
          </div>
          <div className='child-component'>
            <ChildComponent />
          </div>
    </div>
  )
}

export default ParentComponent