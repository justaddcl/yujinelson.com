import * as React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../styles/theme';

export type ExperienceType = 'dev' | 'ux' | 'ui' | 'ecommerce' | 'cms';

export type ExperienceTagValues = {
  text: string;
  color: string; // TODO: use the colors from the design system/theme
};

export type ExperienceTagProps = {
  tag: ExperienceType;
};

const StyledExperienceTag = styled.div`
  background-color: ${(props: ExperienceTagValues) =>
    props.color ? colors[props.color][100] : colors.purple[100]};
  border-radius: ${spacing.tiny};
  padding: ${spacing.tiny} ${spacing.xxs}rem;
  display: grid;
  place-content: center;

  .tag-label {
    color: ${colors.grey[900]};
    font-size: 0.75rem;

    &::before {
      background-color: ${(props: ExperienceTagValues) =>
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

const getExperienceTagValues = (
  tagType: ExperienceType
): ExperienceTagValues => {
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
      // since all the tag types are accounted for above, this condition should never trigger
      // using the `never` type to help reinforce that
      return tagType as never;
  }
};

export const ExperienceTag: React.FC<ExperienceTagProps> = ({ tag }) => {
  const { text, color } = getExperienceTagValues(tag);

  return (
    <StyledExperienceTag tag={tag} color={color}>
      <span className="tag-label">{text}</span>
    </StyledExperienceTag>
  );
};
