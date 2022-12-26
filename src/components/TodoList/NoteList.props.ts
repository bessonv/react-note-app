import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface NoteListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  data?: Data[]
}
