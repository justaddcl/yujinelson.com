import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from './styles/theme';

const StyledExperienceTag = styled.div`
  background-color: ${(props) =>
    props.color ? colors[props.color][100] : colors.purple[100]};
  border-radius: ${spacing.tiny};
  padding: ${spacing.tiny} ${spacing.xxs}rem;
  display: grid;
  place-content: center;

  .tag-label {
    color: ${colors.grey[900]};
    font-size: 0.75rem;

    &::before {
      background-color: ${(props) =>
        props.color ? colors[props.color][500] : colors.purple[500]};
      border-radius: 50%;
      content: '';
      display: inline-block;
      margin-right: ${spacing.tiny};
      height: calc(${spacing.xxs} * ${spacing.basePx}px);
      width: calc(${spacing.xxs} * ${spacing.basePx}px);
    }
  }
`;

const ExperienceTag = ({ tag }) => {
  const { text, color } = ((tagType) => {
    switch (tagType) {
      case 'dev':
        return { text: 'development', color: 'purple' };
      case 'ux':
      case 'ui':
        return { text: 'ux / ui', color: 'green' };
      case 'ecommerce':
      case 'cms':
        return { text: 'ecommerce / cms', color: 'yellow' };
      default:
        return 'development';
    }
  })(tag);
  return (
    <StyledExperienceTag tag={tag} color={color}>
      <span className="tag-label">{text}</span>
    </StyledExperienceTag>
  );
};

export default ExperienceTag;
