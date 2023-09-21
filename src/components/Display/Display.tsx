import "./Display.style.scss";
import DisplayProps from "./Display.props";
import Button from "../Button/Button";
import { useGlobalContext } from "../../context/app.context";
import { ReactComponent as EditIcon } from '../../assets/pencil-filled.svg';

const Display = ({ data, className, ...props }: DisplayProps): JSX.Element => {

  const { showEditModal } = useGlobalContext();

  const handleEdit = () => {
    if (data)
      showEditModal(data.key);
  }
  
  return (
    <div className={`${className ?? ''} note-display`} {...props}>
      {data
        ? <>
            <h2 className="note-display__name">
              {!data.name ? <i className="empty">Empty</i> : data.name}
            </h2>
            <div className="note-display__description">
              {!data.description ? <i className="empty">Empty</i> : data.description}
            </div>
            <div className="note-display__date">
              {`created ${data.created.getDate()}.${data.created.getMonth() + 1}.${data.created.getFullYear()}`}
            </div>
            <Button
              shape="default"
              onClick={handleEdit}
            >
              <EditIcon className="note-display__button-icon"/>
              Edit
            </Button>
          </>
        : <div>Empty object</div>
      }
    </div>
  );
}

export default Display;
