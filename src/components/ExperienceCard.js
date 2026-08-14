import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { colors, fonts, mq, spacing } from './styles/theme';

const StyledExperienceCard = styled.div`
  --role-node-size: calc(${spacing.xxs} * ${spacing.basePx}px);
  --role-node-top: calc(
    (var(--inner-role-primary-size) - var(--role-node-size)) / 2
  );
  --role-left-column: calc(${spacing.l} * ${spacing.basePx}px);
  --role-column-gap: ${spacing.base}rem;
  --inner-role-primary-size: 1rem;

  display: grid;
  grid-template-columns: var(--role-left-column) 1fr;
  column-gap: var(--role-column-gap);
  row-gap: ${spacing.m}rem;
  font-family: ${fonts.family.sourceCodePro};
  margin-bottom: ${spacing.base}rem;
  padding-top: ${spacing.base}rem;
  padding-bottom: ${spacing.base}rem;

  @media screen and (min-width: ${mq.mobile.large}) {
    background: ${colors.purple[700]};
    border-radius: 4px;
    padding: ${spacing.m}rem;
    --role-column-gap: ${spacing.s}rem;
  }

  @media screen and (min-width: ${mq.desktop.small}) {
    --role-column-gap: ${spacing.m}rem;
    row-gap: ${spacing.xs}rem;
  }

  .company-logo {
    background-color: ${colors.grey[500]};
    border-radius: 2px;
  }

  .company-mark {
    align-items: center;
    background-color: ${colors.grey[500]};
    border-radius: 2px;
    color: ${colors.grey[50]};
    display: flex;
    font-family: ${fonts.family.proximaNova};
    font-size: 1.125rem;
    font-weight: 700;
    height: 48px;
    justify-content: center;
    width: 48px;
  }

  .role-summary {
    display: grid;
    row-gap: ${spacing.xxs}rem;

    @media screen and (min-width: ${mq.desktop.small}) {
      grid-template-columns: repeat(3, 1fr);
      column-gap: ${spacing.m}rem;
    }
  }

  .role-dates {
    font-size: 0.875rem;
    margin-bottom: ${spacing.xxs}rem;
    text-transform: uppercase;
    line-height: 1.25rem;
  }

  .role-location-group {
    display: none;
    @media screen and (min-width: ${mq.desktop.small}) {
      display: block;
      margin-top: ${spacing.xxs}rem;
      text-transform: none;
    }
  }

  .role-primary-group {
    margin-bottom: ${spacing.base}rem;
    grid-column: 1 / 3;

    @media screen and (min-width: ${mq.desktop.small}) {
      order: -1;
    }
  }

  .role-primary {
    color: ${colors.grey[50]};
    font-family: ${fonts.family.proximaNova};
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: ${spacing.xxs}rem;
  }

  .role-secondary {
    color: ${colors.grey[200]};
    text-transform: uppercase;
    font-size: ${spacing.base}rem;

    .role-team {
      color: ${colors.grey[400]};
      line-height: 1.3;
    }
  }

  .role-impact-summary {
    color: ${colors.grey[200]};
    line-height: 1.5;
    margin-bottom: ${spacing.base}rem;
    grid-column: 1 / -1;

    &:not(:last-child) {
      margin-bottom: ${spacing.s}rem;
    }

    @media screen and (min-width: ${mq.desktop.small}) {
      margin-bottom: 0;
    }
  }

  .role-bullets {
    list-style-type: disc;
    margin-top: ${spacing.s}rem;
    margin-left: 1.25rem;
    display: grid;
    row-gap: ${spacing.base}rem;
    line-height: 1.5;

    @media screen and (min-width: ${mq.desktop.small}) {
      grid-column: 1 / 3;
    }
  }

  .inner-roles {
    display: grid;
    grid-template-columns: var(--role-left-column) 1fr;
    gap: var(--role-column-gap);
  }

  .role-node {
    background-color: ${colors.blue[600]};
    border-radius: 50%;
    justify-self: center;
    margin-top: var(--role-node-top);
    height: var(--role-node-size);
    width: var(--role-node-size);
  }

  .sub-role {
    display: grid;
    row-gap: ${spacing.xxs}rem;
    position: relative;

    &:not(:last-of-type)::before {
      background-color: ${colors.blue[600]};
      content: '';
      /* height is inner role height - height of role node and role node margin-top */
      height: calc(100% - (var(--role-node-top) + var(--role-node-size)));
      width: 1px;
      position: absolute;
      /* is positioned left of the inner role by grid column gap + distance to middle of the left column */
      left: calc(-1 * ((var(--role-left-column) / 2) + var(--role-column-gap)));
      /* is positioned 8px below the role node - node margin-top + node height + 8px */
      top: calc(
        var(--role-node-top) + var(--role-node-size) +
          (${spacing.xxs} * ${spacing.basePx}px)
      );
    }

    .role-primary {
      font-size: var(--inner-role-primary-size);
    }

    .role-dates {
      color: ${colors.blue[600]};
    }
  }

  &:not(:first-of-type) {
    border-top: 1px solid ${colors.purple[700]};
    padding-top: ${spacing.m}rem;
  }

  &:last-of-type {
    margin-bottom: ${spacing.l}rem;
  }
`;

const ExperienceCard = ({
  company,
  role,
  dates,
  team,
  companyFirst,
  logo,
  location,
  roles,
  summary,
  children,
}) => (
  <StyledExperienceCard>
    {logo ? (
      <GatsbyImage image={logo.childImageSharp.gatsbyImageData} />
    ) : (
      <span aria-hidden="true" className="company-mark">
        {company.charAt(0)}
      </span>
    )}
    <div className="role-summary">
      <div className="role-dates token--teal">
        {dates.start} -{' '}
        {dates.end || <span className="token--yellow">Present</span>}
        <div className="role-location-group">
          <span className="token--purple">in</span> {location}
        </div>
      </div>
      <div className="role-primary-group">
        <div className="role-primary">{companyFirst ? company : role}</div>
        <div className="role-secondary">
          {companyFirst ? role : company}{' '}
          {team && <span className="role-team">/ {team}</span>}
        </div>
      </div>
      {summary && <p className="role-impact-summary">{summary}</p>}
      {children}
    </div>
    {roles && (
      <>
        {roles.map((innerRole) => (
          <React.Fragment
            key={`${company}-${innerRole.team}-${innerRole.title}`}
          >
            <span className="role-node" />
            <div className="sub-role">
              <div className="role-primary">{innerRole.title}</div>
              <div className="role-secondary">{innerRole.team}</div>
              <div className="role-dates">
                {innerRole.start} -{' '}
                {innerRole.end || (
                  <span className="token--yellow">Present</span>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}
      </>
    )}
  </StyledExperienceCard>
);

export default ExperienceCard;
