import React from 'react';

const ResumeLink = ({ button, primary, small, children }) => (
  <a
    href="/resume"
    target="_blank"
    rel="noopener noreferrer"
    className={`${button ? 'button' : ''}${primary ? ' button--primary' : ''}${
      small ? ' button--small' : ''
    }`}
  >
    {children || <>Resume</>}
  </a>
);

export default ResumeLink;
