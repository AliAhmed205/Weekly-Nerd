let i = 0;
let txt = 'Welcome to my Weekly Nerd Blog! Explore the latest in web development through the eyes of industry speakers. Join me weekly as they share their insights, tech discoveries, and passion for coding, keeping me at the forefront of this dynamic field. Let us dive in!';
let speed = 20;
const w1Button = document.querySelector('.w1');
const w2Button = document.querySelector('.w2');
const goalsButton = document.querySelector('.doelen');
const sectionWeek1 = document.querySelector('.week1');
const sectionWeek2 = document.querySelector('.week2');
const sectionMyGoals = document.querySelector('.myGoals');
const menuIcon = document.getElementById('hamburgerMenu');
const burgerMenu = document.getElementById('burgerMenu');
const menuItems = document.querySelectorAll('#burgerMenu button');



menuIcon.addEventListener("click", () => {
    burgerMenu.classList.toggle("burgerActive")
})

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        burgerMenu.classList.remove('burgerActive');
    });
});

setTimeout(() => {
    sectionMyGoals.style.display = "block";
    sectionMyGoals.classList.add("active", "slideUp");
}, 0); 

w1Button.addEventListener("click", () => {
    if (!sectionWeek1.classList.contains("active")) {
        w1Button.classList.add("remove")
        const activeSection = document.querySelector('.active');
        if (activeSection) {
            activeSection.classList.remove("active", "slideUp");
            setTimeout(() => {
                activeSection.style.display = "none";
            }, 0);
        }

        setTimeout(() => {
            sectionWeek1.style.display = "block";
            sectionWeek1.classList.add("active", "slideUp");
        }, 0); 
    }
});

w2Button.addEventListener("click", () => {
    if (!sectionWeek2.classList.contains("active")) {
        const activeSection = document.querySelector('.active');
        if (activeSection) {
            activeSection.classList.remove("active", "slideUp");
            setTimeout(() => {
                activeSection.style.display = "none";
            }, 0);
        }

        setTimeout(() => {
            sectionWeek2.style.display = "block";
            sectionWeek2.classList.add("active", "slideUp");
        }, 0); 
    }
});

goalsButton.addEventListener("click", () => {
    if (!sectionMyGoals.classList.contains("active")) {
        const activeSection = document.querySelector('.active');
        if (activeSection) {
            activeSection.classList.remove("active", "slideUp");
            setTimeout(() => {
                activeSection.style.display = "none";
            }, 0);
        }

        setTimeout(() => {
            sectionMyGoals.style.display = "block";
            sectionMyGoals.classList.add("active", "slideUp");
        }, 0); 
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
