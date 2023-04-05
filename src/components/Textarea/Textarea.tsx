import './Textarea.style.scss';
import { TextareaProps } from './Textarea.props';

const Textarea = ({ textareaLabel, textareaValue, className, ...props }: TextareaProps) => {
  return (
    <>
      <textarea
        className={`${className ?? ''} note-textarea`}
        rows={6}  
        placeholder={textareaLabel} 
        value={textareaValue}
        {...props}/>
    </>
  );
};

export default Textarea;
