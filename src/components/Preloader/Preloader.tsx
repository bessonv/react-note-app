import "./Preloader.style.scss";
import PreloaderProps from "./Preloader.props";

const Preloader = ({ show, children }: PreloaderProps) => {
  return (
    show
    ? <>{children}</>
    : <div className='loading_message'>Loading</div>
  )
}

export default Preloader;

