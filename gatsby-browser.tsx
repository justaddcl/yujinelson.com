import type { GatsbyBrowser } from 'gatsby';

/**
 * Gatsby complains if we use a default export, so disabling the eslint rule to make sure the file exports
 * match what Gatsby is expecting
 */
// eslint-disable-next-line import/prefer-default-export
export const onRouteUpdate: GatsbyBrowser['onRouteUpdate'] = () => {
  const mobileMenuElements = document.querySelectorAll(
    '[class*=StyledMobileMenu]'
  );
  mobileMenuElements.forEach((item) => {
    if (item.classList.contains('is-open')) {
      item.classList.remove('is-open');
    }
  });
};
