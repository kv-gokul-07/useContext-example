import { useContext } from 'react'
import { InputValueContext } from '../../hooks/useContext/contextApi'

const ChildComponent = () => {

    const props = useContext(InputValueContext);

  return (
    <>
        <div>Child component</div>
        <h4 className='mt-20 fw500'>Input value from parent component: {props?.inputValue}</h4>
    </>
  )
}

export default ChildComponent