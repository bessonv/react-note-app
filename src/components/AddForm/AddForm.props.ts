import { DetailedHTMLProps, FormHTMLAttributes } from "react";

export default interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>{
  todo?: Data
}
