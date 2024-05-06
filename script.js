let i = 0,
  txt = 'Welkom op mijn Weekly Nerd Blog! Ontdek de nieuwste ontwikkelingen in webontwikkeling met inzichten van experts uit de industrie. Sluit je wekelijks bij me aan om op de hoogte te blijven van dit dynamische vakgebied. Laten we beginnen!',
  speed = 20,
  w1Button = document.querySelector('.w1'),
  w2Button = document.querySelector('.w2'),
  goalsButton = document.querySelector('.doelen'),
  sectionWeek1 = document.querySelector('.week1'),
  sectionWeek2 = document.querySelector('.week2'),
  sectionMyGoals = document.querySelector('.myGoals'),
  menuIcon = document.getElementById('hamburgerMenu'),
  burgerMenu = document.getElementById('burgerMenu'),
  menuItems = document.querySelectorAll('#burgerMenu button');

menuIcon.addEventListener("click", () => {
  burgerMenu.classList.toggle("burgerActive")
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    burgerMenu.classList.remove('burgerActive');
  })
});

setTimeout(() => {
  sectionMyGoals.style.display = "block";
  sectionMyGoals.classList.add("active", "slideUp");
}, 0);

function showSection(section) {
  const activeSection = document.querySelector('.active');
  if (activeSection) {
    activeSection.classList.remove("active", "slideUp");
    setTimeout(() => {
      activeSection.style.display = "none";
    }, 0);
  }
  setTimeout(() => {
    section.style.display = "block";
    section.classList.add("active", "slideUp");
  }, 0);
}

w1Button.addEventListener("click", () => {
  if (!sectionWeek1.classList.contains("active")) {
    w1Button.classList.add("remove");
    showSection(sectionWeek1);
  }
});

w2Button.addEventListener("click", () => {
  if (!sectionWeek2.classList.contains("active")) {
    showSection(sectionWeek2);
  }
});

goalsButton.addEventListener("click", () => {
  if (!sectionMyGoals.classList.contains("active")) {
    showSection(sectionMyGoals);
  }
});

function typeWriter() {
  const aboutBio = document.querySelector('.about');
  if (i < txt.length) {
    aboutBio.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 5000);
