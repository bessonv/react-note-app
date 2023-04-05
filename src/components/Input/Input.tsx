import './Input.style.scss';
import { InputProps } from './Input.props';

const Input = ({ inputLabel, inputValue, className, ...props }: InputProps) => {
  return (
    <>
      <input
        className={`${className ?? ''} note-input`}
        type="text" 
        placeholder={inputLabel} 
        value={inputValue}
        {...props}/>
    </>
  );
};

export default Input;
