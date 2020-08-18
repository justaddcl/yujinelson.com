import { css } from 'styled-components';
import { colors, spacing, mq } from './theme';

const mixins = {
  link: css`
    color: inherit;
    cursor: pointer;
    display: inline-block;
    font: inherit;
    text-decoration: none;
  `,
  button: css`
    background: none;
    border: 1px solid ${colors.purple[500]};
    border-radius: 2px;
    padding: ${spacing.xs}rem ${spacing.s}rem;
    transition: background 0.2s ease;

    &:hover {
      background: ${colors.purple[500]}20;
    }

    &:active {
      background: ${colors.purple[500]}33;
    }

    &--primary {
      background: ${colors.purple[500]};
      color: ${colors.grey[50]};

      &:hover {
        background: ${colors.purple[500]}aa;
      }

      &:active {
        background: ${colors.purple[500]}85;
      }
    }

    &--large {
      padding: ${spacing.base}rem ${spacing.m}rem;
    }

    & .icon {
      font-size: 0.875rem;
      &--right {
        margin-left: ${spacing.base}rem;
      }
    }

    @media screen and (min-width: ${mq.mobile.small}) {
      padding: ${spacing.base}rem ${spacing.m}rem;

      &--small {
        padding: ${spacing.xs}rem ${spacing.base}rem;
      }
    }
  `,
};

export default mixins;
