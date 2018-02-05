import * as React from 'react';
import { ThemeInterface } from '../theme/index';

interface ButtonProps {
  theme?: ThemeInterface;
  name?: string;
  height?: string;
  width?: string;
  onClick?: () => void;
}

const Button: React.SFC<ButtonProps> = ({
    name,
    onClick,
}) => {
    return (
      <button onClick={onClick}>
        {name}
      </button>
    );
};

export default Button;
