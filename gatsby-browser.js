exports.onRouteUpdate = () => {
  const mobileMenuElements = document.querySelectorAll(
    '[class*=StyledMobileMenu]'
  );
  mobileMenuElements.forEach((item) => {
    if (item.classList.contains('is-open')) {
      item.classList.remove('is-open');
    }
  });
};
