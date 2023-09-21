import { DetailedHTMLProps, LiHTMLAttributes } from "react";

export default interface NoteItemProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  data: Data,
  isShown?: boolean
}
