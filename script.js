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
