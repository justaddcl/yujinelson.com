import { css } from 'styled-components';
import { colors, spacing, mq } from './theme';

const mixins = {
  button: css`
    background: ${(props) => (props.primary ? colors.purple[500] : 'none')};
    border: ${(props) =>
      props.primary ? 'none' : `1px solid ${colors.purple[500]}`};
    border-radius: 2px;
    color: ${(props) => (props.primary ? colors.grey[50] : 'inherit')};
    cursor: pointer;
    display: inline-block;

    padding: ${(props) =>
      props.large
        ? `${spacing.base}rem ${spacing.m}rem`
        : `${spacing.xs}rem ${spacing.s}rem`};

    @media screen and (min-width: ${mq.mobile.small}) {
      padding: ${spacing.base}rem ${spacing.m}rem;
    }
  `,
};

export default mixins;
