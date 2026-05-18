// Smooth welcome message
window.addEventListener("load", () => {
  alert("Welcome to Brandon's Portfolio Website!");
});

// Highlight navigation links when clicked
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Portfolio project click effect
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    alert(`You selected: ${card.querySelector("h3").innerText}`);
  });
});

// Dark mode toggle button
const darkModeBtn = document.createElement("button");
darkModeBtn.innerText = "Toggle Dark Mode";
darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "20px";
darkModeBtn.style.right = "20px";
darkModeBtn.style.padding = "10px 15px";
darkModeBtn.style.border = "none";
darkModeBtn.style.borderRadius = "10px";
darkModeBtn.style.cursor = "pointer";
darkModeBtn.style.background = "#0077ff";
darkModeBtn.style.color = "white";

document.body.appendChild(darkModeBtn);

// Toggle dark mode
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Dark mode styles
const style = document.createElement("style");
style.innerHTML = `
  .dark-mode {
    background-color: #121212;
    color: white;
  }

  .dark-mode .about,
  .dark-mode .portfolio,
  .dark-mode .project-card {
    background-color: #1e1e1e;
    color: white;
    border-color: #333;
  }

  .dark-mode nav {
    background-color: #000;
  }

  .active {
    color: #00bcd4 !important;
  }
`;

document.head.appendChild(style);