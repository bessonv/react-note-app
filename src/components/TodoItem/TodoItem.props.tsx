import { DetailedHTMLProps, LiHTMLAttributes } from "react";

export default interface ItemProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  data: Data,
  isShown?: boolean
}
