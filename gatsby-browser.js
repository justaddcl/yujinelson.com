exports.onRouteUpdate = () => {
  const mobileMenuElements = document.querySelectorAll(
    '[class*=StyledMobileMenu]'
  );
  mobileMenuElements.forEach((item) => {
    if (item.classList.contains('open')) {
      item.classList.remove('open');
    }
  });
};
