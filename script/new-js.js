document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.scroll-content');
  const mobileNav = document.getElementById('mobile-navigation');
  const speakersHeader = document.getElementById('speakers-header');

  // Smooth scroll into view on focus
  links.forEach(link => {
    link.addEventListener('focus-visible', () => {
      link.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    });
  });

  // Add scroll event listener to window
  window.addEventListener('scroll', () => {
    // Get the top offset of #speakers-header
    const speakersHeaderTop = speakersHeader.getBoundingClientRect().top + window.scrollY;

    // Get the bottom offset of #mobile-navigation
    const mobileNavBottom = mobileNav.getBoundingClientRect().bottom + window.scrollY;

    // If the bottom of #mobile-navigation is above the top of #speakers-header, add the scroll class
    if (mobileNavBottom >= speakersHeaderTop) {
      mobileNav.classList.add('scroll');
    } else {
      mobileNav.classList.remove('scroll');
    }
  });

  const menuBtn = document.getElementById('open-button');
  const menuList = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close');
  
  // Event listener voor de open-button
  menuBtn.addEventListener('click', () => {
    menuList.classList.add('show');
  });
  
  // Event listener voor de close-button
  closeBtn.addEventListener('click', () => {
    menuList.classList.remove('show');
  });
  
  // Event listener voor elk a-element binnen het menu
  const menuItems = menuList.querySelectorAll('a');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuList.classList.remove('show');
    });
  });  

});
