import { IInput, defaultInput } from "../../interfaces/interface.Input";

export const Input = (props: IInput) => {
  
  return (
    <>
        <input 
            className={`input ${props.value.length > 0?"input-empty":"input-full"}`}
            type={props.type} 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </>
  )
}
Input.defaultProps=defaultInput