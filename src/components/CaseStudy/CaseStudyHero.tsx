import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import styled from 'styled-components';
import type { CaseStudyContent } from '../../content/case-studies/types';
import Hero from '../Hero';
import { H1 } from '../styles/headers';
import Text from '../styles/Text';
import { colors, fonts, mq, spacing } from '../styles/theme';

const BackLink = styled(Link)`
  color: ${colors.blue[400]};
  font-family: ${fonts.family.sourceCodePro};
  justify-self: start;
`;

const ProjectOverview = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${spacing.m}rem;

  @media screen and (min-width: ${mq.mobile.large}) {
    flex-direction: initial;
    gap: ${spacing.xxl}rem;
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  flex: 0 0 max-content;
  flex-wrap: wrap;
  gap: ${spacing.m}rem;

  @media screen and (min-width: ${mq.mobile.large}) {
    flex-direction: column;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.m}rem;
  min-width: 0;

  .summary-role p:not(:last-child) {
    margin-bottom: ${spacing.s}rem;
  }
`;

const SummaryLabel = styled.h3`
  color: ${colors.grey[400]};
  font-family: ${fonts.family.sourceCodePro};
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  margin-bottom: ${spacing.xxs}rem;
  text-transform: uppercase;
`;

const SummaryValue = styled.p`
  color: ${colors.grey[50]};
  font-family: ${fonts.family.proximaNova};
  font-size: ${spacing.xs}rem;
  line-height: 1.3;
  margin: 0;

  @media screen and (min-width: ${mq.mobile.large}) {
    font-size: ${spacing.base}rem;
  }
`;

const StatusValue = styled(SummaryValue)`
  color: ${colors.green[500]};
`;

const ProjectLinks = styled.ul`
  display: grid;
  gap: ${spacing.base}rem;
  list-style: none;

  li {
    line-height: 1.35;
  }

  a {
    color: ${colors.blue[400]};
    font-family: ${fonts.family.proximaNova};
    font-size: ${spacing.xs}rem;

    @media screen and (min-width: ${mq.mobile.large}) {
      font-size: ${spacing.base}rem;
    }

    span {
      text-decoration: underline;
    }

    .source-icon {
      margin-inline-end: 4px;

      @media screen and (min-width: ${mq.mobile.large}) {
        margin-inline-end: ${spacing.xxs}rem;
      }
    }

    small {
      color: ${colors.grey[300]};
      display: block;
      font-family: ${fonts.family.sourceCodePro};
      font-size: 10px;
      font-style: italic;
      margin-top: ${spacing.xxxs}rem;
      text-transform: uppercase;

      @media screen and (min-width: ${mq.mobile.large}) {
        font-size: ${spacing.xs}rem;
        margin-top: ${spacing.xxs}rem;
      }
    }
  }
`;

const TechnologyOverview = styled.section`
  margin-top: ${spacing.l}rem;
  padding-bottom: ${spacing.l}rem;
`;

const TechnologyHeading = styled.h2`
  color: ${colors.grey[300]};
  font-family: ${fonts.family.sourceCodePro};
  margin-bottom: ${spacing.m}rem;
  text-transform: uppercase;
`;

const StackGroups = styled.dl`
  display: grid;
  gap: ${spacing.m}rem;
  grid-template-columns: 1fr;

  dt {
    color: ${colors.grey[400]};
    font-family: ${fonts.family.sourceCodePro};
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    margin-bottom: ${spacing.xxs}rem;
    text-transform: uppercase;
  }

  dd {
    color: ${colors.grey[100]};
    font-family: ${fonts.family.proximaNova};
    font-size: 1.125rem;
    line-height: 1.35;
    margin: 0;
  }

  @media screen and (min-width: ${mq.mobile.large}) {
    gap: 2rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

type CaseStudyHeroProps<TMediaId extends string> = {
  caseStudy: CaseStudyContent<TMediaId>;
};

const CaseStudyHero = <TMediaId extends string>({
  caseStudy,
}: CaseStudyHeroProps<TMediaId>) => (
  <>
    <BackLink to="/projects">← All projects</BackLink>
    <Hero>
      <H1>{caseStudy.title}</H1>
      <ProjectOverview aria-label="Project details">
        <ProjectMeta>
          <div>
            <SummaryLabel>Status</SummaryLabel>
            <StatusValue>{caseStudy.summary.status}</StatusValue>
          </div>
          <div>
            <SummaryLabel>Dates</SummaryLabel>
            <SummaryValue>{caseStudy.summary.dates}</SummaryValue>
          </div>
          <div>
            <SummaryLabel>Links</SummaryLabel>
            <ProjectLinks>
              {caseStudy.summary.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    {link.icon && (
                      <FontAwesomeIcon
                        icon={link.icon}
                        className="source-icon"
                      />
                    )}
                    <span>{link.value}</span>
                    {link.note && <small>{link.note}</small>}
                  </a>
                </li>
              ))}
            </ProjectLinks>
          </div>
        </ProjectMeta>
        <ProjectInfo>
          <div className="summary-role">
            <SummaryLabel>Overview</SummaryLabel>
            <Text>{caseStudy.introduction}</Text>
          </div>
          <div className="summary-role">
            <SummaryLabel>Role</SummaryLabel>
            <Text>{caseStudy.summary.role}</Text>
            {caseStudy.summary.roleDetail && (
              <Text>{caseStudy.summary.roleDetail}</Text>
            )}
          </div>
        </ProjectInfo>
      </ProjectOverview>
      <TechnologyOverview aria-labelledby="technology-summary-title">
        <TechnologyHeading id="technology-summary-title">
          Tech Stack
        </TechnologyHeading>
        <StackGroups>
          {caseStudy.summary.stack.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.value}</dd>
            </div>
          ))}
        </StackGroups>
      </TechnologyOverview>
    </Hero>
  </>
);

export default CaseStudyHero;
