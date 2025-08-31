const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");

const options = {
  threshold: 0.6 // section is active when 60% visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === entry.target.id) {
          link.classList.add("active");
        }
      });
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

const homeText = document.querySelector(".home-text");
const typingText = document.getElementById("typing-text");
const nameToType = "Olorato Nthula";
let index = 0;

const homeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      homeText.classList.add("show");
      typeWriter();
    }
  });
}, { threshold: 0.4 });

homeObserver.observe(homeText);

function typeWriter() {
  if (index < nameToType.length) {
    typingText.textContent += nameToType.charAt(index);
    index++;
    setTimeout(typeWriter, 150); // typing speed in ms
  }
}
