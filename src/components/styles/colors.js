const purple = {
  100: '#f9f5f9',
  500: '#b48ead',
  700: '#4a4f68',
  800: '#343746',
  900: '#30333f',
};

const grey = {
  50: '#f4f5f9',
  100: '#e4e5eb',
  200: '#c9ccd8',
  300: '#9a9eb1',
  400: '#7b7f93',
  500: '#60657a',
  600: '#51566b',
  700: '#3e445a',
  800: '#33384c',
  900: '#1f2232',
};

const green = {
  100: '#f7f9f4',
  500: '#a3be8c',
};

const yellow = {
  100: '#fdfbf1',
  500: '#ebcb8b',
};

const blue = {
  400: '#88c0d0',
  500: '#8fbcbb',
  600: '#81a1c1',
};

const colors = {
  purple,
  grey,
  green,
  yellow,
  blue,
  tokens: {
    purple: purple[500],
    green: green[500],
    yellow: yellow[500],
    blue: blue[600],
    lightBlue: blue[400],
    teal: blue[500],
  },
};

export default colors;
