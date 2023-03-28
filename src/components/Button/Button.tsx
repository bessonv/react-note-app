import "./Button.style.scss"
import { ButtonProps } from "./Button.props";

const Button = ({ size, children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={className + ` ${size ? 'button-medium' : ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;
