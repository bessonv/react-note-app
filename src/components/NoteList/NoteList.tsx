import "./NoteList.style.scss";
import NoteListProps from "./NoteList.props";
import { useEffect, useState } from "react";
import NoteItem from "../NoteItem/NoteItem";

const NoteList = ({ data, className, ...props }: NoteListProps): JSX.Element => {
  const [list, setList] = useState<Data[] | null>([]);

  useEffect(() => {
    if (data) {
      data.sort((a: Data, b: Data) => {
        return b.created.getTime() - a.created.getTime();
      });
      setList(data);
    }
  }, [data]);

  return (
    <ul
      className={`${className ?? ''} note-list`}
      {...props}
    >
      {
        (list && list.length > 0) ? list.map((element) => {
          return <NoteItem key={element.key} data={element} />;
        }) : <div>The list is empty</div>
      }
    </ul>
  )
}

export default NoteList;
