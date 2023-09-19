import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface DisplayProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data?: Data | null
}