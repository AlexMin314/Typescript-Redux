import * as React from 'react';
// import * as PropTypes from 'prop-types';
import styled, { ThemeInterface } from '../theme/index';
// import styled from '../theme/index';

interface ButtonProps {
  theme?: ThemeInterface;
  name?: string;
  height?: string;
  width?: string;
  onClick?: () => void;
  margined?: boolean;
  primary?: boolean;
}ª

const StyledButton = styled.button`
  background: ${(props: ButtonProps): any => props.primary && props.theme && props.theme.primaryColor};
  width: ${(props: ButtonProps): string => props.width || '5rem'};
  height: ${(props: ButtonProps): string => props.height || '2rem'};
  margin: ${(props: ButtonProps): any => props.margined && '10px'};
`;

const Button: React.SFC<ButtonProps> = ({
  name,
  onClick,
  ...rest
}) => {
  console.log('Rest : ', rest);
  return (
    <StyledButton onClick={onClick} {...rest}>
      {name}
    </StyledButton>
  );
};

Button.defaultProps = {
  name: 'Button',
  height: '100px',
  width: '180px',
  onClick: () => null,
  margined: false,
  primary: false
};

export default Button;
