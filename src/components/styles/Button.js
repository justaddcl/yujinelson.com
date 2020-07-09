import styled from 'styled-components';
import { colors, mq, spacing } from './theme';

const Button = styled.button`
  background: ${(props) => (props.primary ? colors.purple[500] : 'none')};
  border: ${(props) =>
    props.primary ? 'none' : `1px solid ${colors.purple[500]}`};
  border-radius: 2px;
  color: ${(props) => (props.primary ? colors.grey[50] : colors.grey[200])};
  cursor: pointer;
  display: inline-block;
  font: inherit;
  padding: ${(props) =>
    props.large
      ? `${spacing.base}rem ${spacing.m}rem`
      : `${spacing.xs}rem ${spacing.s}rem`};

  @media screen and (min-width: ${mq.mobile.small}) {
    padding: ${spacing.base}rem ${spacing.m}rem;
  }

  .icon {
    &--right {
      margin-left: ${spacing.base}rem;
    }
  }
`;

export default Button;
