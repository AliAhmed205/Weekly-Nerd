document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.scroll-content');
  const mobileNav = document.getElementById('mobile-navigation');
  const speakersHeader = document.getElementById('speakers-header');

  // Smooth scroll into view on focus if the link exists
  links.forEach(link => {
    link.addEventListener('focus-visible', () => {
      if (link) {
        link.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        });
      }
    });
  });

  // Add scroll event listener to window if mobileNav and speakersHeader exist
  window.addEventListener('scroll', () => {
    if (mobileNav && speakersHeader) {
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
    }
  });

  const menuBtn = document.getElementById('open-button');
  const menuList = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close');
  
  // Event listener for the open-button if menuBtn exists
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      if (menuList) {
        menuList.classList.add('show');
      }
    });
  }
  
  // Event listener for the close-button if closeBtn exists
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (menuList) {
        menuList.classList.remove('show');
      }
    });
  }
  
  // Event listener for each a-element within the menu if menuItems exist
  const menuItems = menuList.querySelectorAll('a');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      if (menuList) {
        menuList.classList.remove('show');
      }
    });
  });  

});