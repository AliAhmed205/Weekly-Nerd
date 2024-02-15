let i = 0;
let txt = 'Welcome to my Weekly Nerd Blog! Explore the latest in web development through the eyes of industry speakers. Join me weekly as they share their insights, tech discoveries, and passion for coding, keeping me at the forefront of this dynamic field. Let us dive in!';
let speed = 20;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("about").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter()


async function readMe() {
    const response = await fetch("fetch(`https://raw.githubusercontent.com/AliAhmed205/repository/main/process.md`)");
    const data = await response.json();
    console.log(data);
  }