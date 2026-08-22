import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { captureAnalyticsEvent } from '../../analytics/posthog';
import { colors, fonts, mq, spacing } from '../styles/theme';
import Text from '../styles/Text';
import type { Project } from '../../content/projects';
import projectsContent from '../../content/projects';

type ProjectCardProps = {
  project: Project;
};

const cardStyles = css`
  background: ${colors.purple[700]};
  border: 1px solid ${colors.grey[700]};
  border-radius: 2px;
  display: grid;
  gap: ${spacing.m}rem;
  padding: ${spacing.m}rem;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${colors.purple[500]};
    color: inherit;
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }

  @media screen and (min-width: ${mq.mobile.large}) {
    padding: ${spacing.l}rem;
  }
`;

const ProjectCardLink = styled(Link)`
  ${cardStyles}
`;

const ProjectCardSurface = styled.div`
  ${cardStyles}
`;

const ProjectHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs}rem;

  @media screen and (min-width: ${mq.mobile.large}) {
    align-items: baseline;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProjectTitle = styled.h2`
  color: ${colors.grey[50]};
  font-size: ${spacing.m}rem;
  font-weight: 700;
`;

const Status = styled.span`
  color: ${colors.green[500]};
  font-family: ${fonts.family.sourceCodePro};
  font-size: 0.875rem;
`;

const ProjectDetails = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    color: ${colors.grey[300]};
    font-family: ${fonts.family.sourceCodePro};
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    margin-bottom: ${spacing.xs}rem;
    text-transform: uppercase;
  }
`;

const ProjectDetailPoints = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectAction = styled.span`
  color: ${colors.blue[400]};
  display: flex;
  font-family: ${fonts.family.sourceCodePro};
  gap: ${spacing.xs}rem;
  justify-self: start;
`;

const ProjectCardContent = ({ project }: ProjectCardProps) => {
  const actionLabel = projectsContent.projectActionLabel;

  return (
    <>
      <ProjectHeader>
        <ProjectTitle id={`${project.name.toLowerCase()}-project-title`}>
          {project.name}
        </ProjectTitle>
        <Status>{project.status}</Status>
      </ProjectHeader>
      <ProjectDetails>
        {project.summary.map((paragraph) => (
          <Text key={paragraph} marginBottomDesktop="0">
            {paragraph}
          </Text>
        ))}
        {project.detailPoints && (
          <ProjectDetailPoints>
            {project.detailPoints.map((point) => (
              <li key={point.title}>
                <h3>{point.title}</h3>
                <Text>{point.description}</Text>
              </li>
            ))}
          </ProjectDetailPoints>
        )}
      </ProjectDetails>
      {project.caseStudyUrl && (
        <ProjectAction>
          {actionLabel}
          <FontAwesomeIcon icon="arrow-right" className="icon icon--right" />
        </ProjectAction>
      )}
    </>
  );
};

const ProjectCard = ({ project }: ProjectCardProps) => (
  <li>
    {project.caseStudyUrl ? (
      <ProjectCardLink
        to={project.caseStudyUrl}
        onClick={() => {
          captureAnalyticsEvent('project_case_study_clicked', {
            project_name: project.name,
          });
        }}
      >
        <ProjectCardContent project={project} />
      </ProjectCardLink>
    ) : (
      <ProjectCardSurface>
        <ProjectCardContent project={project} />
      </ProjectCardSurface>
    )}
  </li>
);

export default ProjectCard;
