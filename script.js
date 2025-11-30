// THEME TOGGLER
const root = document.documentElement;
const themeToggleBtn = document.getElementById("theme-toggle");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
  themeToggleBtn.textContent = theme === "light" ? "🌙" : "☀️";
}

// Load saved theme
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark" || savedTheme === "light") {
  setTheme(savedTheme);
} else {
  setTheme("light");
}

themeToggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  setTheme(current === "light" ? "dark" : "light");
});

// MOBILE NAV TOGGLE
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close nav when clicking a link (mobile)
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
  }
});

//navigation active link highlighting
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); // e.g., "projects.html"
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});


//filter projects by semester

document.addEventListener("DOMContentLoaded", function () {
  const filterSelect = document.getElementById("semester-filter");
  if (!filterSelect) return; // we're not on the projects page

  const cards = document.querySelectorAll(".project-card");

  function applySemesterFilter() {
    const selected = filterSelect.value; // "all", "1", "2", "3", "4"

    cards.forEach(card => {
      const semester = card.dataset.semester; // from data-semester="1"
      const shouldShow = selected === "all" || semester === selected;
      card.style.display = shouldShow ? "" : "none";
    });
  }

  // Run once on load
  applySemesterFilter();

  // Run every time the user changes the filter
  filterSelect.addEventListener("change", applySemesterFilter);
});





