import { InputHTMLAttributes, DetailedHTMLProps } from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  inputLabel: string;
  inputValue: string;
}
