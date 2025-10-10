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


// Adjust this to match your 3rd section's ID
const thirdSection = document.querySelectorAll("badges")[2]; 
const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
  if (!thirdSection) return;
  
  const sectionTop = thirdSection.offsetTop;
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  // Show button when the user passes the 3rd section
  if (scrollY >= sectionTop) {
    toTopBtn.style.display = "flex";
  } else {
    toTopBtn.style.display = "none";
  }
});




