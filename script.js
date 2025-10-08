const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  // Switch between ☰ and ✖
  if (navMenu.classList.contains("show")) {
    menuToggle.innerHTML = "&#10006;"; // ✖
  } else {
    menuToggle.innerHTML = "&#9776;";  // ☰
  }
});

// Add this script to your HTML file
document.addEventListener('DOMContentLoaded', function() {
  // Duplicate scroll content for seamless animation
  const scrollContents = document.querySelectorAll('.scroll-content');
  
  scrollContents.forEach(content => {
    // Clone the content
    const clone = content.cloneNode(true);
    // Append the clone
    content.parentNode.appendChild(clone);
  });
});
