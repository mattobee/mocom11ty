window.addEventListener('DOMContentLoaded', () => {
  const drawer = document.querySelector('.drawer-menu');
  const openButton = document.querySelector('.open-menu');
  const closeButton = drawer.querySelector('sl-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
});
