import * as React from 'react';
import styled from '../theme/index';
// import styled from 'styled-components';

interface ButtonProps {
  name?: string;
  height?: string;
  width?: string;
  onClick?: () => void;
  margined?: boolean;
  primary?: boolean;
}

// Q1. what will be a good practice using typescript
// with styled-component and theme?
const StyledButton = styled.button`
  background: ${(props): any => props.primary && props.theme.primaryColor};
  width: ${(props: ButtonProps): string => props.height || '5rem'};
  height: ${(props: ButtonProps): string => props.height || '2rem'};
  margin: ${(props: ButtonProps): any => props.margined && '10px'};
`;

// Q2. If I need default values, then should put that in the destruction?
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

export default Button;
