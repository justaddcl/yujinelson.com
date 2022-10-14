import type { GatsbyNode } from 'gatsby';

const resume =
  '/static/Yuji-Nelson-CV-2022-21e9515412f6493c7053aaff5ea45134.pdf';

/**
 * Gatsby complains if we use a default export, so disabling the eslint rule to make sure the file exports
 * match what Gatsby is expecting
 */
// eslint-disable-next-line import/prefer-default-export
export const createPages: GatsbyNode['createPages'] = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/resume',
    toPath: resume,
    isPermanent: true,
    redirectInBrowser: true,
  });
};
