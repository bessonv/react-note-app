import "./Button.style.scss"
import { ButtonProps } from "./Button.props";

const Button = ({ size, appearance='plain', children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${className ?? ''} button-${size} button-${appearance}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;
