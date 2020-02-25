import React from 'react';
import { FontSize, FontFamily } from '../../styles/Font';
import styled from 'styled-components';

type Props = {
  fontSize?: FontSize,
  text: string | number
}

const Label: React.FC<Props> = (props) => {
  const { fontSize = FontSize.Medium, text } = props;
  return (
    <StyledLabel fontSize={fontSize}>
      {text}
    </StyledLabel>
  )
}

export default Label;

type StyledLabelProps = {
  fontSize: FontSize
}

const StyledLabel = styled.div<StyledLabelProps>(props => `
  font-size: ${props.fontSize};
  font-family: ${FontFamily.Roboto};
  margin: 8px;
`)