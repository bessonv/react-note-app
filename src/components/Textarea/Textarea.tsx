import "./Textarea.style.scss";
import { TextareaProps } from "./Textarea.props";
import { useRef } from "react";

const Textarea = ({label, className, ...props}: TextareaProps) => {
  const { value } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  let textareaHeight = undefined;
  const textareaEl = textareaRef.current;
  if (value && textareaEl) {
    textareaHeight = (textareaEl.scrollHeight > textareaEl.clientHeight) 
      ? textareaEl.scrollHeight + 20
      : textareaEl.offsetHeight;
  }

  return (
    <>
      <label className="textarea__label">{label}</label>
      <textarea
        className={`${className ?? ''} textarea__input`}
        rows={6}
        style={{
          height: textareaHeight
        }}
        ref={textareaRef}
        {...props}
      />
    </>
  );
}

export default Textarea;
