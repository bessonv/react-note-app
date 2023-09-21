import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  shape?: 'default' | 'round',
  appearance?: 'primary' | 'plain',
  isLoading?: boolean,
}
