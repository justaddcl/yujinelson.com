const resume =
  '/static/Yuji-Nelson-CV-2021-7f148cd5833e9b42302a43cb9979c2fc.pdf';

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/resume',
    toPath: resume,
    isPermanent: true,
    redirectInBrowser: true,
  });
};
