let i = 0;
let txt = 'Welcome to my Weekly Nerd Blog! Explore the latest in web development through the eyes of industry speakers. Join me weekly as they share their insights, tech discoveries, and passion for coding, keeping me at the forefront of this dynamic field. Let us dive in!';
let speed = 20;
const w1Button = document.getElementById('w1');
const w2Button = document.getElementById('w2');
const sectionWeek1 = document.getElementById('week1');
const sectionWeek2 = document.getElementById('week2');

w1Button.addEventListener("click", () => {
    if (!sectionWeek1.classList.contains("active")) {
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

function typeWriter() {
    const aboutBio = document.getElementById('about');
    if (i < txt.length) {
        aboutBio.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

setTimeout(typeWriter, 5000);
