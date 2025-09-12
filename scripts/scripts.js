document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const viewProjectsBtn = document.querySelector(".view_projects");
  const contactBtn = document.querySelector(".contact");
  const form = document.querySelector(".contact-form");

  // Toggle menu
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });

  // Scroll to sections
  if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener("click", () => {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Handle form submission
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        alert(`✅ Thank you, ${name}! Your message has been sent.`);
        form.reset();
      } else {
        alert("⚠️ Please fill in all fields before submitting.");
      }
    });
  }
});
