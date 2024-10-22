window.addEventListener('DOMContentLoaded', () => {
  const drawer = document.querySelector('.drawer-menu');
  const openButton = document.querySelector('.open-menu');
  const closeButton = drawer.querySelector('sl-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('sl-theme-dark');
  }
});