import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface ListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  data?: Data[]
}
