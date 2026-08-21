export type ProjectProfile = {
  title: string;
  introduction: string[];
};

const sanbiProject: ProjectProfile = {
  title: 'Sanbi',
  introduction: [
    `Sanbi is a product I'm building to explore how worship leaders can prepare worship sets faster without digging through old message threads and notes.`,
    'The first version focuses on the core planning workflow. It helps teams organise sets, keep useful song information together, and build a history they can return to over time.',
  ],
};

export default sanbiProject;
