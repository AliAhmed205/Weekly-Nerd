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

typeWriter();

// script.js

async function fetchMarkdown() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/AliAhmed205/Weekly-Nerd/main/week1.md');
      const markdownText = await response.text();
  
      document.getElementById('polypane').innerHTML = markdownText;
    } catch (error) {
      console.error('Error fetching Markdown:', error);
    }
  }
  
  fetchMarkdown();
  