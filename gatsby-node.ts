import type { GatsbyNode } from 'gatsby';

const resume =
  '/static/Yuji-Nelson-CV-2022-21e9515412f6493c7053aaff5ea45134.pdf';

const createPages: GatsbyNode['createPages'] = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/resume',
    toPath: resume,
    isPermanent: true,
    redirectInBrowser: true,
  });
};

export default createPages;
