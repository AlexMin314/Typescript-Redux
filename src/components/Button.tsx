import * as React from 'react';
// import * as PropTypes from 'prop-types';
// import styled, { withProps } from '../theme/index';
// import styled, { ThemeInterface } from '../theme/index';
// import styled, { styledWithProps, ThemeInterface } from '../theme/index';
// import styledComponents from 'styled-components';
import styled, { ThemeInterface } from '../theme/index';

interface ButtonProps {
  theme?: ThemeInterface;
  name?: string;
  height?: string;
  width?: string;
  onClick?: () => void;
  margined?: boolean;
  primary?: boolean;
}

const StyledButton = styled.button`
  background: ${(props: ButtonProps): any => props.primary && props.theme && props.theme.primaryColor};
  margin: ${(props: ButtonProps): any => props.margined && '10px'};
  width: ${(props: ButtonProps): string  => props.width || '5rem'};
  height: ${(props: ButtonProps): string => props.height || '2rem'};
`;

const Button: React.SFC<ButtonProps> = ({
  name,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {name}
    </StyledButton>
  );
};

Button.defaultProps = {
  name: 'Button',
  height: '50px',
  width: '100px',
  onClick: () => null,
  margined: false,
  primary: false
};

export default Button;
