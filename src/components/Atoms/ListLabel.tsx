import React from 'react';
import { FontSize, FontFamily } from '../../styles/Font';
import styled from 'styled-components';

type Props = {
  fontSize?: FontSize,
  text: string | number
}

const ListLabel: React.FC<Props> = (props) => {
  const { fontSize = FontSize.Medium, text } = props;
  return (
    <StyledLabel fontSize={fontSize}>
      {text}
    </StyledLabel>
  )
}

export default ListLabel;

type StyledListLabelProps = {
  fontSize: FontSize
}

const StyledLabel = styled.li<StyledListLabelProps>(props => `
  font-size: ${props.fontSize}px;
  font-family: ${FontFamily.Roboto};
  margin-left: 16px;
`)