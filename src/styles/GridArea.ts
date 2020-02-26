import styled from "styled-components";

type Props = {
  area: string
}

const GridArea = styled.div<Props>(props => `
  grid-area: ${props.area};
  position: relative;
`);

export default GridArea;