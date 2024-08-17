const btn = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  window.scrollY > 100 ? btn.style.display = 'inline-block' : btn.style.display = 'none';
});

btn.addEventListener('click', () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});