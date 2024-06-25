document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.scroll-content');

  links.forEach(link => {
    link.addEventListener('focus-visible', () => {
      link.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    });
  });
});
