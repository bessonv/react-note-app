import "./Input.style.scss";
import { InputProps } from "./Input.props";

const Input = ({label, className, ...props}: InputProps) => {
  const { placeholder } = props;
  return (
    <>
      {label && <label className="input__label">{label}</label>}
      <input 
        className={`${className ?? ''} input__input`}
        type="text" 
        placeholder={placeholder}
        {...props}
      />
    </>
  );
}

export default Input;
