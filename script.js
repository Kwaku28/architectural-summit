const vectors = document.querySelector('.vector');
const navLink = document.querySelector('.nav-links');

vectors.addEventListener('click', () => {
  vectors.classList.toggle('active');
  navLink.classList.toggle('active');
});

document.querySelectorAll('ul.nav-links > li').forEach((n) => n.addEventListener('click', () => {
  vectors.classList.remove('active');
  navLink.classList.remove('active');
}));
