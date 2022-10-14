const spacing = {
  // tiny - in experience card
  // base - 1em
  // xxs - mobile - hero comment, section marker margin-bottom, margin-bottom experience card date, experience card badge
  // xs - 12px - mobile, only used for top header margin-bottom
  // s - 24px
  // m - 32px
  // l - 48px
  // xl - space between page sections
  // huge - before homepage hero, before footer
  // p - between paragraphs

  /**
   * TODO: re-think these size variation names
   * Currently, the `s`, `m`, `l` variations  violates the id-length eslint rule of < 2 characters
   */
  // scale
  tiny: '4px',
  xxs: 0.5,
  xs: 0.75,
  base: 1,
  s: 1.5,
  m: 2,
  l: 3,
  xl: 4,
  xxl: 6,
  xxxl: 8,
  huge: 9,

  // values
  basePx: 16,
};

export default spacing;
