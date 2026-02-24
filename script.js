const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.topbar nav');

menuToggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});
