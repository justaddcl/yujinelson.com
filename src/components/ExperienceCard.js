import React from 'react';
import styled from 'styled-components';
import { colors, fonts, spacing } from './styles/theme';

const StyledExperienceCard = styled.div`
  --role-node-size: calc(${spacing.xxs} * ${spacing.basePx}px);
  --role-node-top: calc(
    (var(--inner-role-primary-size) - var(--role-node-size)) / 2
  );
  --role-left-column: calc(${spacing.l} * ${spacing.basePx}px);
  --role-column-gap: ${spacing.base}rem;
  --inner-role-primary-size: 1rem;

  display: grid;
  row-gap: ${spacing.s}rem;
  font-family: ${fonts.family.sourceCodePro};
  margin-bottom: ${spacing.base}rem;
  padding-top: ${spacing.base}rem;
  padding-bottom: ${spacing.base}rem;

  .company-logo {
    background-color: ${colors.grey[500]};
    border-radius: 2px;
  }

  .role-summary {
    display: grid;
    grid-template-columns: var(--role-left-column) 1fr;
    column-gap: var(--role-column-gap);
  }

  .role-column--right {
    display: grid;
    row-gap: ${spacing.base}rem;
  }

  .role-details {
    display: grid;
    row-gap: ${spacing.xxs}rem;
  }

  .role-dates {
    color: ${colors.blue[500]};
    font-size: 0.875rem;
    text-transform: uppercase;
  }

  .role-primary {
    color: ${colors.grey[50]};
    font-family: ${fonts.family.proximaNova};
    font-size: 1.25rem;
    font-weight: 700;
  }

  .role-secondary {
    color: ${colors.grey[200]};
    text-transform: uppercase;

    .role-team {
      color: ${colors.grey[500]};
    }
  }

  .role-highlight {
    color: ${colors.yellow[500]};
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

  .inner-role {
    display: grid;
    gap: ${spacing.xxs}rem;
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
      color: ${colors.grey[100]};
      font-size: var(--inner-role-primary-size);
    }

    .role-secondary {
      color: ${colors.grey[400]};
    }

    .role-dates {
      color: ${colors.blue[600]};
    }
  }

  .experience-tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    margin: -${spacing.xxs}rem;

    & > * {
      margin: ${spacing.xxs}rem;
    }
  }

  &:not(:first-of-type) {
    border-top: 1px solid ${colors.purple[700]};
    padding-top: ${spacing.m}rem;
  }
`;

const ExperienceCard = ({
  startDate,
  endDate,
  rolePrimary,
  roleSecondary,
  roleTeam,
  roles,
  children,
}) => {
  return (
    <StyledExperienceCard>
      <div className="role-summary">
        <img
          className="company-logo"
          width={`${spacing.l * spacing.basePx}px`}
          height={`${spacing.l * spacing.basePx}px`}
          src=""
          alt=""
        />
        <div className="role-column--right">
          <div className="role-details">
            <div className="role-dates">
              {startDate} -{' '}
              {endDate || <span className="role-highlight">Present</span>}
            </div>
            <div className="role-primary">{rolePrimary}</div>
            <div className="role-secondary">
              {roleSecondary}{' '}
              {roleTeam && <span className="role-team">/ {roleTeam}</span>}
            </div>
          </div>
          <div className="experience-tags">{children}</div>
        </div>
      </div>
      {roles && (
        <div className="inner-roles">
          {roles.map((role) => (
            <>
              <span className="role-node" />
              <div className="inner-role">
                <div className="role-primary">{role.title}</div>
                <div className="role-secondary role-secondary">{role.team}</div>
                <div className="role-dates">
                  {role.startDate} -{' '}
                  {role.endDate || (
                    <span className="role-highlight">Present</span>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </StyledExperienceCard>
  );
};

export default ExperienceCard;
