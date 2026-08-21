import React, { type ReactNode } from 'react';
import { captureAnalyticsEvent } from '../analytics/posthog';

type ResumeLinkProps = {
  button?: boolean;
  primary?: boolean;
  small?: boolean;
  children?: ReactNode;
};

const ResumeLink = ({
  button = false,
  primary = false,
  small = false,
  children = undefined,
}: ResumeLinkProps) => (
  <a
    href="/resume"
    target="_blank"
    onClick={() => captureAnalyticsEvent('resume_link_clicked')}
    rel="noopener noreferrer"
    className={`${button ? 'button' : ''}${primary ? ' button--primary' : ''}${
      small ? ' button--small' : ''
    }`}
  >
    {children || <>Resume</>}
  </a>
);

export default ResumeLink;
