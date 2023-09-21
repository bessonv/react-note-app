import "./Textarea.style.scss";
import { TextareaProps } from "./Textarea.props";
import { useEffect, useRef, useState } from "react";

const Textarea = ({label, className, ...props}: TextareaProps) => {
  const { value } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textareaHeight, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const textareaEl = textareaRef.current;
    if (!textareaEl) return;
    const newHeight = (textareaEl.scrollHeight > textareaEl.clientHeight) 
      ? textareaEl.scrollHeight + 20
      : textareaEl.offsetHeight;
    setHeight(newHeight);
  }, [value, textareaRef])

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
