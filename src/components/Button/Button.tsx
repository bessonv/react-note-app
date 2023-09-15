import "./Button.style.scss"
import { ButtonProps } from "./Button.props";

const Button = ({ shape='default', appearance='plain', children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${className ?? ''} button-${shape} button-${appearance}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;
