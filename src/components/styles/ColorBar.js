import styled from 'styled-components';
import { colors } from './theme';

const ColorBar = styled.div`
  background-color: ${colors.purple[500]};
  height: 4px;
  width: 100%;
  position: relative;
  z-index: 9;
`;

export default ColorBar;
