import "./Button.style.scss"
import { ButtonProps } from "./Button.props";

const Button = ({ shape='default', appearance='plain', isLoading=false, children, className, ...props }: ButtonProps): JSX.Element => {
  let buttonClass = `${className ?? ''} button-${shape} button-${appearance}`;
  if (isLoading) {
    buttonClass += ' button-loading';
  }
  return (
    <button
      className={buttonClass}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <div className="button__loading-circle" /> : children}
    </button>
  )
}

export default Button;
