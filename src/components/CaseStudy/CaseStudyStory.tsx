import React from 'react';
import { GatsbyImage, type IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';
import type {
  CaseStudySection,
  CaseStudyBlock,
} from '../../content/case-studies/types';
import { H2 } from '../styles/headers';
import Text from '../styles/Text';
import { colors, fonts, mq, spacing } from '../styles/theme';

export type CaseStudyMedia =
  | { type: 'image'; image: IGatsbyImageData }
  | { type: 'animation'; src: string; reducedMotionSrc: string };

export type CaseStudyMediaMap<TMediaId extends string> = Record<
  TMediaId,
  CaseStudyMedia
>;

const Story = styled.div`
  display: grid;
  gap: ${spacing.xxl}rem;
  padding-bottom: ${spacing.xxl}rem;
`;

const StorySection = styled.section`
  display: grid;
  gap: ${spacing.s}rem;

  ${H2} {
    margin-bottom: ${spacing.xs}rem;
  }

  > p {
    margin-bottom: 0;
  }
`;

const List = styled.ul`
  color: ${colors.grey[50]};
  display: grid;
  font-family: ${fonts.family.sourceCodePro};
  gap: ${spacing.xxs}rem;
  line-height: 1.5;
  list-style: disc;
  margin: ${spacing.xs}rem 0;
  padding-left: ${spacing.m}rem;

  @media screen and (min-width: ${mq.desktop.small}) {
    font-size: 1.125rem;
  }
`;

const Figure = styled.figure<{ $presentation?: 'wide' | 'phone' }>`
  display: grid;
  gap: ${spacing.xs}rem;
  margin: ${spacing.m}rem 0;
  max-width: ${({ $presentation }) =>
    $presentation === 'phone' ? '24rem' : 'none'};

  img {
    display: block;
    height: auto;
    width: 100%;
  }
`;

const Caption = styled.figcaption`
  color: ${colors.grey[300]};
  font-family: ${fonts.family.sourceCodePro};
  font-size: 0.75rem;
  line-height: 1.5;
`;

type CaseStudyStoryProps<TMediaId extends string> = {
  sections: CaseStudySection<TMediaId>[];
  media: CaseStudyMediaMap<TMediaId>;
};

const CaseStudyStory = <TMediaId extends string>({
  sections,
  media,
}: CaseStudyStoryProps<TMediaId>) => {
  const renderBlock = (block: CaseStudyBlock<TMediaId>, index: number) => {
    if (block.type === 'paragraph') {
      return <Text key={`${block.type}-${index}`}>{block.text}</Text>;
    }

    if (block.type === 'list') {
      return (
        <List key={`${block.type}-${index}`}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      );
    }

    const asset = media[block.media];

    return (
      <Figure
        key={`${block.type}-${block.media}`}
        $presentation={block.presentation}
      >
        {asset.type === 'image' ? (
          <GatsbyImage image={asset.image} alt={block.alt} />
        ) : (
          <picture>
            <source
              media="(prefers-reduced-motion: reduce)"
              srcSet={asset.reducedMotionSrc}
            />
            <img src={asset.src} alt={block.alt} loading="lazy" />
          </picture>
        )}
        {block.caption && <Caption>{block.caption}</Caption>}
      </Figure>
    );
  };

  return (
    <Story>
      {sections.map((section) => (
        <StorySection key={section.id} aria-labelledby={section.id}>
          <H2 id={section.id}>{section.title}</H2>
          {section.blocks.map(renderBlock)}
        </StorySection>
      ))}
    </Story>
  );
};

export default CaseStudyStory;
