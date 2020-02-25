import React from 'react';
import styled from 'styled-components';
import { FontSize, FontFamily } from '../../styles/Font';

type Props = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = (props) => {
  const { label, onClick } = props;
  return (
    <StyledButton onClick={onClick}>
      {label}
    </StyledButton>
  )
}

export default Button;

const StyledButton = styled.button`
  font-size: ${FontSize.Medium}px;
  font-family: ${FontFamily.Roboto};
  margin: 8px;
`