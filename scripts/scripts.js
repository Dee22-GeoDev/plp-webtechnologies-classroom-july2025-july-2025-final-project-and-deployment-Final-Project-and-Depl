
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Optional: close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});

// Select buttons
const viewProjectsBtn = document.querySelector(".view_projects");
const contactBtn = document.querySelector(".contact");

// Scroll to projects section
viewProjectsBtn.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

// Scroll to contact section
contactBtn.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Handle form submission
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop default page reload

  // Collect form data
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`✅ Thank you, ${name}! Your message has been sent.`);
    form.reset(); // clear the form after submission
  } else {
    alert("⚠️ Please fill in all fields before submitting.");
  }
});
