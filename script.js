const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const menuIcon = navToggle?.querySelector(".menu-icon");
const closeIcon = navToggle?.querySelector(".close-icon");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const desktopNavQuery = window.matchMedia("(min-width: 1025px)");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const isNavOpen = () => nav?.classList.contains("is-open") || false;

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
  setNavState(!isNavOpen());
});

nav?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLAnchorElement)) return;
  setNavState(false);
});

document.addEventListener("click", (event) => {
  if (!isNavOpen()) return;
  if (event.target instanceof Node && header?.contains(event.target)) return;
  setNavState(false);
});

const syncNavForViewport = (event) => {
  if (event.matches) setNavState(false);
};

if (typeof desktopNavQuery.addEventListener === "function") {
  desktopNavQuery.addEventListener("change", syncNavForViewport);
} else if (typeof desktopNavQuery.addListener === "function") {
  desktopNavQuery.addListener(syncNavForViewport);
}


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

const galleryAlbums = [
  {
    year: "2021",
    folder: "NIBAD 2021",
    photos: [
      "0b2076d6-d6f5-442c-befb-64cde59eec33.jpg",
      "3275efab-5c49-4aec-9041-a21398a1bf57.jpg",
      "3486d88d-2dc9-41ad-bd02-e13357153677.jpg",
      "3ace9ee1-d43e-4afc-a5bd-91738184b612.jpg",
      "3dc81832-e2c6-476a-821c-d42474b0f98e.jpg",
      "50462649-cf0f-4cb8-ae2a-c7680f96db99.jpg",
      "587756fe-8803-479f-85ce-ea23e73f4fe3.jpg",
      "5f6b0b52-3514-434b-97f8-463c9f539ef2.jpg",
      "6f4869b1-8930-47d6-90f1-51893ed2813b.jpg",
      "743e9752-b3dc-4023-8a85-454348045afe.jpg",
      "7c793f7e-cb2b-429d-a8c3-df71e391f209.jpg",
      "8c7cd58d-6f2a-486e-a32f-9f8e1c6076e3.jpg",
      "8d260a88-2f77-4044-8a47-0d56f526c471.jpg",
      "8ee18a7c-d4fc-4d08-af5d-035ae2eb50e4.jpg",
      "9fb78805-1c2d-48b1-9213-e8b6def1ca56.jpg",
      "a2f4bb65-715f-4468-9468-94b52c114bf5.jpg",
      "acf93b92-e39d-4474-b2a6-86b7eca1b764.jpg",
      "b4e30cc9-c3ec-4e20-b144-2122b46dbd16.jpg",
      "bfe446b8-8b98-41e0-b1c3-13ee5dc7e9eb.jpg",
      "cd0cf664-2c9b-40dc-b6a0-f9a20c3af4c0.jpg",
      "cfed387f-fcdd-4b01-bf38-f94228623b7e.jpg",
      "e8f71a42-8a59-40f9-b7ed-90891eeedb6b.jpg",
      "f4907b91-d1ba-462c-87ef-44c0bdd4ab7b.jpg",
    ],
  },
  {
    year: "2022",
    folder: "NIBAD 2022",
    photos: [
      "0b2076d6-d6f5-442c-befb-64cde59eec33.jpg",
      "3275efab-5c49-4aec-9041-a21398a1bf57.jpg",
      "3486d88d-2dc9-41ad-bd02-e13357153677.jpg",
      "3ace9ee1-d43e-4afc-a5bd-91738184b612.jpg",
      "3dc81832-e2c6-476a-821c-d42474b0f98e.jpg",
      "50462649-cf0f-4cb8-ae2a-c7680f96db99.jpg",
      "587756fe-8803-479f-85ce-ea23e73f4fe3.jpg",
      "5f6b0b52-3514-434b-97f8-463c9f539ef2.jpg",
      "6f4869b1-8930-47d6-90f1-51893ed2813b.jpg",
      "743e9752-b3dc-4023-8a85-454348045afe.jpg",
      "7c793f7e-cb2b-429d-a8c3-df71e391f209.jpg",
      "8c7cd58d-6f2a-486e-a32f-9f8e1c6076e3.jpg",
      "8d260a88-2f77-4044-8a47-0d56f526c471.jpg",
      "8ee18a7c-d4fc-4d08-af5d-035ae2eb50e4.jpg",
      "9fb78805-1c2d-48b1-9213-e8b6def1ca56.jpg",
      "a2f4bb65-715f-4468-9468-94b52c114bf5.jpg",
      "acf93b92-e39d-4474-b2a6-86b7eca1b764.jpg",
      "b4e30cc9-c3ec-4e20-b144-2122b46dbd16.jpg",
      "bfe446b8-8b98-41e0-b1c3-13ee5dc7e9eb.jpg",
      "cd0cf664-2c9b-40dc-b6a0-f9a20c3af4c0.jpg",
      "cfed387f-fcdd-4b01-bf38-f94228623b7e.jpg",
      "e8f71a42-8a59-40f9-b7ed-90891eeedb6b.jpg",
      "f4907b91-d1ba-462c-87ef-44c0bdd4ab7b.jpg",
    ],
  },
  {
    year: "2023",
    folder: "NIBAD 2023",
    photos: [
      "3c847cfd-fa42-4c3e-96bc-6fb559c6150a.jpg",
      "45cf9a54-304d-45d0-9087-cad391561c39.jpg",
      "7dd46715-ec25-4cb4-b32b-465ed1a30f9d.jpg",
      "82d13e69-cf35-4244-bf78-3b7895bd7164.jpg",
      "82ef133a-bdc4-4ed4-85ac-e260bd757f25.jpg",
      "ba558fdf-6d7c-4d7a-9ef1-45956df32980.jpg",
      "deed5fcc-a5a3-4e25-92b1-f761d291bbeb.jpg",
      "ed6e5eb3-4d53-430e-bcbc-acbc34a7104e.jpg",
      "ff31c552-677b-44d5-a559-d2c3820355f5.jpg",
      "ff91fb70-1c10-4876-b19b-940e05c924f1.jpg",
    ],
  },
  {
    year: "2024",
    folder: "NIBAD 2024",
    photos: [
      "3c847cfd-fa42-4c3e-96bc-6fb559c6150a.jpg",
      "3f6a7308-b60a-47f8-89c2-1a73e10cc981.jpg",
      "8cddff31-210b-4449-8413-402681d98c56.jpg",
      "b4b44f74-c99d-4001-b7ce-1ef79557b70f.jpg",
      "ba558fdf-6d7c-4d7a-9ef1-45956df32980.jpg",
      "bbbe4d10-dd48-428a-8bb8-88e111026905.jpg",
    ],
  },
  {
    year: "2025",
    folder: "NIBAD 2025",
    photos: [
      "0cdefe80-1c22-4360-b368-da2e4c5e3d7e.jpg",
      "1a97f330-88a3-4a25-930e-4e5679ac8121.jpg",
      "8c487287-34af-482c-ade7-d829a5b2b977.jpg",
      "8d403ecd-729f-4137-952d-c43d274aff56.jpg",
      "25a940e7-6315-4a39-8478-9bfb07a0aba0.jpg",
      "58c68512-231a-41de-8f2d-3fcf34de247f.jpg",
      "21005da7-e25b-4ad6-8636-f526cae818da.jpg",
      "8553136e-fc5d-4a4b-865a-64d51916fa02.jpg",
      "720adc7a-c68a-4e20-bec8-d1a922916496.jpg",
      "62089981-653d-4700-b266-d3f03bb3af73.jpg",
      "c92c7200-f8dc-437e-be3c-1e1ad4c1572e.jpg",
      "e3862534-5811-4459-a578-75fc9bbcfd47.jpg",
      "eba37ac7-2fcb-4f36-9944-96018c907454.jpg",
      "fd3dccef-23c0-41be-aefa-59370aa4eb3b.jpg",
    ],
  },
];

const galleryTabs = document.querySelector("[data-gallery-tabs]");
const galleryStatus = document.querySelector("[data-gallery-status]");
const galleryLightbox = document.querySelector("[data-gallery-lightbox]");
const galleryLightboxImage = document.querySelector("[data-gallery-lightbox-image]");
const galleryLightboxCaption = document.querySelector("[data-gallery-lightbox-caption]");
const galleryLightboxCounter = document.querySelector("[data-gallery-lightbox-counter]");
const galleryClose = document.querySelector("[data-gallery-close]");
const galleryPrev = document.querySelector("[data-gallery-prev]");
const galleryNext = document.querySelector("[data-gallery-next]");

let activeGalleryAlbum = galleryAlbums.find((album) => album.year === "2025") || galleryAlbums[0];
let activeGalleryIndex = 0;
let galleryLastFocus = null;
let galleryCloseTimer = null;

const getGalleryPhoto = (album, index) => {
  const number = index + 1;
  const src = `${album.folder}/${album.photos[index]}`;
  const alt = `NIBAD ${album.year} gallery photo ${number}`;
  return { alt, number, src };
};

const setActiveGalleryButton = (year) => {
  galleryTabs?.querySelectorAll("[data-gallery-year]").forEach((button) => {
    const isActive = button.getAttribute("data-gallery-year") === year;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const updateGalleryStatus = () => {
  if (!galleryStatus || !activeGalleryAlbum) return;
  const count = activeGalleryAlbum.photos.length;
  galleryStatus.textContent = `Opened NIBAD ${activeGalleryAlbum.year} archive with ${count} ${count === 1 ? "photo" : "photos"}.`;
};

const openGalleryAlbum = (year = "2025") => {
  const album = galleryAlbums.find((item) => item.year === year) || activeGalleryAlbum;
  activeGalleryAlbum = album;
  activeGalleryIndex = 0;
  setActiveGalleryButton(album.year);
  updateGalleryStatus();
  openGalleryLightbox(0);
};

const updateGalleryLightbox = () => {
  if (!activeGalleryAlbum || !galleryLightboxImage || !galleryLightboxCaption || !galleryLightboxCounter) return;
  const photo = getGalleryPhoto(activeGalleryAlbum, activeGalleryIndex);
  galleryLightboxImage.src = photo.src;
  galleryLightboxImage.alt = photo.alt;
  galleryLightboxCaption.textContent = photo.alt;
  galleryLightboxCounter.textContent = `Photo ${photo.number} of ${activeGalleryAlbum.photos.length}`;
};

const openGalleryLightbox = (index) => {
  if (!galleryLightbox || !activeGalleryAlbum) return;
  if (galleryCloseTimer) {
    window.clearTimeout(galleryCloseTimer);
    galleryCloseTimer = null;
  }
  setNavState(false);
  galleryLastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  activeGalleryIndex = Math.min(Math.max(index, 0), activeGalleryAlbum.photos.length - 1);
  galleryLightbox.hidden = false;
  updateGalleryLightbox();
  window.requestAnimationFrame(() => {
    galleryLightbox.classList.add("is-open");
  });
  galleryLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("gallery-open");
  galleryClose?.focus({ preventScroll: true });
};

const closeGalleryLightbox = () => {
  if (!galleryLightbox) return;
  galleryLightbox.classList.remove("is-open");
  galleryLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("gallery-open");
  galleryCloseTimer = window.setTimeout(() => {
    galleryLightbox.hidden = true;
    galleryCloseTimer = null;
    if (galleryLightboxImage) {
      galleryLightboxImage.src = "";
      galleryLightboxImage.alt = "";
    }
  }, prefersReducedMotion ? 0 : 300);
  if (galleryLastFocus instanceof HTMLElement) {
    galleryLastFocus.focus({ preventScroll: true });
  }
};

const moveGalleryLightbox = (direction) => {
  if (!activeGalleryAlbum) return;
  const total = activeGalleryAlbum.photos.length;
  if (!total) return;
  activeGalleryIndex = (activeGalleryIndex + direction + total) % total;
  updateGalleryLightbox();
};

const isGalleryOpen = () => galleryLightbox?.classList.contains("is-open") || false;

const getGalleryFocusableElements = () => {
  if (!galleryLightbox) return [];
  return Array.from(galleryLightbox.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"))
    .filter((element) => element instanceof HTMLElement && !element.hasAttribute("disabled") && !element.getAttribute("aria-hidden"));
};

galleryTabs?.addEventListener("click", (event) => {
  const button = event.target instanceof Element ? event.target.closest("[data-gallery-year]") : null;
  if (!(button instanceof HTMLButtonElement)) return;
  openGalleryAlbum(button.getAttribute("data-gallery-year") || "2025");
});

galleryClose?.addEventListener("click", closeGalleryLightbox);
galleryPrev?.addEventListener("click", () => moveGalleryLightbox(-1));
galleryNext?.addEventListener("click", () => moveGalleryLightbox(1));

galleryLightboxImage?.addEventListener("error", () => {
  if (!galleryLightboxCaption || !galleryLightboxCounter) return;
  galleryLightboxCaption.textContent = "This gallery photo could not be loaded.";
  galleryLightboxCounter.textContent = activeGalleryAlbum ? `NIBAD ${activeGalleryAlbum.year}` : "Gallery";
});

galleryLightbox?.addEventListener("click", (event) => {
  if (event.target === galleryLightbox) {
    closeGalleryLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  const galleryIsOpen = isGalleryOpen();

  if (event.key === "Escape") {
    if (galleryIsOpen) {
      event.preventDefault();
      closeGalleryLightbox();
      return;
    }

    if (isNavOpen()) {
      event.preventDefault();
      setNavState(false);
      navToggle?.focus({ preventScroll: true });
    }

    return;
  }

  if (!galleryIsOpen) return;

  if (event.key === "Tab") {
    const focusableElements = getGalleryFocusableElements();
    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveGalleryLightbox(-1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    moveGalleryLightbox(1);
  }
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
