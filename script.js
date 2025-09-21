// Placeholder for interactivity (smooth scroll handled by CSS)
console.log("One-page portfolio loaded!");

<script>
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
</script>
