document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,

    once: true,

    offset: 100,
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const navbarCollapse = document.querySelector(".navbar-collapse");

      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    });
  });

  let lastScroll = 0;

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }

    lastScroll = currentScroll;
  });
});
