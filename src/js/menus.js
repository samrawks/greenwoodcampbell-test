var submenuLink = document.querySelector('.submenu__treatments');
var submenu = document.querySelector('.nav-secondary__submenu');

// TODO: Refactor this.
submenuLink.addEventListener('mouseover', () => {
  submenu.style.display = 'block';
  submenu.classList.remove('close');
  submenu.classList.add('open');
});
submenu.addEventListener('mouseover', () => {
  submenu.style.display = 'block';
  submenu.classList.remove('close');
  submenu.classList.add('open');
});
submenu.addEventListener('mouseleave', () => {
  submenu.classList.add('close');
  submenu.classList.remove('open');
  submenu.style.display = 'none';
});
submenuLink.addEventListener('mouseleave', () => {
  submenu.classList.add('close');
  submenu.classList.remove('open');
  submenu.style.display = 'none';
});