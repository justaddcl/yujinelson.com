import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ContentContainer from '../components/styles/ContentContainer';
import { H1 } from '../components/styles/headers';
import P from '../components/styles/Text';
import { spacing } from '../components/styles/theme';
import { ProjectCard } from '../components/ProjectCard';
import projectsContent from '../content/projects';

const ProjectsPage = styled(ContentContainer)``;

const ProjectsList = styled.ul`
  & > li:not(:last-child) {
    margin-bottom: ${spacing.l}rem;
  }
`;

const Projects = () => (
  <ProjectsPage gap="l">
    <SEO
      title={projectsContent.seo.title}
      description={projectsContent.seo.description}
    />
    <Hero>
      <H1>{projectsContent.hero.heading}</H1>
      <P>{projectsContent.hero.introduction}</P>
    </Hero>
    <ProjectsList aria-labelledby="project-title-list">
      {projectsContent.projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ProjectsList>
  </ProjectsPage>
);

export default Projects;
