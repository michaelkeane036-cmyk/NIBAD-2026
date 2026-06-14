const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const menuIcon = navToggle?.querySelector(".menu-icon");
const closeIcon = navToggle?.querySelector(".close-icon");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const setNavState = (isOpen) => {
  nav?.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
  navToggle?.setAttribute("aria-expanded", String(isOpen));
  navToggle?.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuIcon?.classList.toggle("hidden", isOpen);
  closeIcon?.classList.toggle("hidden", !isOpen);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle?.addEventListener("click", () => {
  setNavState(!nav?.classList.contains("is-open"));
});

nav?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLAnchorElement)) return;
  setNavState(false);
});

document.querySelectorAll(".newsletter").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");
    if (input) input.value = "";
  });
});

const syncFaqIcon = (item) => {
  const isOpen = item.open;
  item.querySelector(".faq-plus")?.classList.toggle("hidden", isOpen);
  item.querySelector(".faq-minus")?.classList.toggle("hidden", !isOpen);
};

document.querySelectorAll(".faq-item").forEach((item) => {
  syncFaqIcon(item);
  item.addEventListener("toggle", () => {
    syncFaqIcon(item);
  });
});

if (prefersReducedMotion) {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-visible");
  });
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
  });
}

if (!prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
  const floaters = document.querySelectorAll("[data-depth]");
  window.addEventListener("pointermove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    floaters.forEach((element) => {
      const depth = Number(element.getAttribute("data-depth") || 0);
      element.style.setProperty("--parallax-x", `${x * depth}px`);
      element.style.setProperty("--parallax-y", `${y * depth}px`);
    });
  }, { passive: true });
}
