import { TextareaHTMLAttributes, DetailedHTMLProps } from "react";

export interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  textareaLabel: string;
  textareaValue: string;
}
