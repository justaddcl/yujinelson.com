import { join } from 'node:path';
import type { GatsbyNode } from 'gatsby';
import { findLatestCvFilename } from './scripts/find-latest-cv';

const cv = `/${findLatestCvFilename(join(process.cwd(), 'static'))}`;
const cvAliasUrls = ['/resume', '/cv'];

/**
 * Gatsby complains if we use a default export, so disabling the eslint rule to make sure the file exports
 * match what Gatsby is expecting
 */
// eslint-disable-next-line import/prefer-default-export
export const createPages: GatsbyNode['createPages'] = ({ actions }) => {
  const { createRedirect } = actions;
  cvAliasUrls.forEach((fromPath) => {
    createRedirect({
      fromPath,
      toPath: cv,
      isPermanent: false,
      redirectInBrowser: true,
    });
  });
};

export const onCreateDevServer: GatsbyNode['onCreateDevServer'] = ({ app }) => {
  cvAliasUrls.forEach((fromPath) => {
    app.get(fromPath, (_request, response) => {
      response.redirect(302, cv);
    });
  });
};
