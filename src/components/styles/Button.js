import styled from 'styled-components';
import { spacing } from './theme';
import mixins from './mixins';

const Button = styled.button`
  ${mixins.button};

  .icon {
    &--right {
      margin-left: ${spacing.base}rem;
    }
  }
`;

export default Button;
