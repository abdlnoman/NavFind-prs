// Load pages dynamically
async function loadPage(page) {
    const res = await fetch(`pages/${page}.html`);
    const html = await res.text();
    document.getElementById("content").innerHTML = html;
  }
  
  // Setup navigation
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      loadPage(page);
      document.getElementById("mobile-menu").classList.add("hidden");
    });
  });
  
  // Mobile menu toggle
  document.getElementById("mobile-menu-button").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });
  
  // Default load
  loadPage("home");
  