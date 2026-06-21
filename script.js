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
];

const galleryGrid = document.querySelector("[data-gallery-grid]");
const galleryTabs = document.querySelector("[data-gallery-tabs]");
const galleryStatus = document.querySelector("[data-gallery-status]");
const galleryLightbox = document.querySelector("[data-gallery-lightbox]");
const galleryLightboxImage = document.querySelector("[data-gallery-lightbox-image]");
const galleryLightboxCaption = document.querySelector("[data-gallery-lightbox-caption]");
const galleryLightboxCounter = document.querySelector("[data-gallery-lightbox-counter]");
const galleryClose = document.querySelector("[data-gallery-close]");
const galleryPrev = document.querySelector("[data-gallery-prev]");
const galleryNext = document.querySelector("[data-gallery-next]");

let activeGalleryAlbum = galleryAlbums.find((album) => album.year === "2024") || galleryAlbums[0];
let activeGalleryIndex = 0;
let galleryLastFocus = null;
let galleryCloseTimer = null;

const getGalleryPhoto = (album, index) => {
  const number = index + 1;
  const src = `${album.folder}/${album.photos[index]}`;
  const alt = `NIBAD ${album.year} gallery photo ${number}`;
  return { alt, number, src };
};

const setActiveGalleryTab = (year) => {
  galleryTabs?.querySelectorAll("[data-gallery-year]").forEach((button) => {
    const isActive = button.getAttribute("data-gallery-year") === year;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.setAttribute("tabindex", isActive ? "0" : "-1");
  });
};

const updateGalleryStatus = () => {
  if (!galleryStatus || !activeGalleryAlbum) return;
  const count = activeGalleryAlbum.photos.length;
  galleryStatus.textContent = `Viewing NIBAD ${activeGalleryAlbum.year} memories with ${count} ${count === 1 ? "photo" : "photos"}.`;
};

const renderGalleryAlbum = (year = "2024") => {
  if (!galleryGrid) return;
  const album = galleryAlbums.find((item) => item.year === year) || activeGalleryAlbum;
  activeGalleryAlbum = album;
  galleryGrid.innerHTML = "";

  album.photos.forEach((_, index) => {
    const photo = getGalleryPhoto(album, index);
    const figure = document.createElement("figure");
    const button = document.createElement("button");
    const image = document.createElement("img");
    const overlay = document.createElement("span");
    const caption = document.createElement("figcaption");

    figure.className = "gallery-card group";
    button.className = "gallery-photo-btn";
    button.type = "button";
    button.setAttribute("aria-label", `Open ${photo.alt}`);
    image.src = photo.src;
    image.alt = photo.alt;
    image.loading = "lazy";
    overlay.className = "image-overlay";
    caption.className = "gallery-caption";
    caption.textContent = `Photo ${photo.number}`;

    button.append(image, overlay, caption);
    figure.append(button);
    galleryGrid.append(figure);

    button.addEventListener("click", () => {
      openGalleryLightbox(index);
    });
  });

  setActiveGalleryTab(album.year);
  updateGalleryStatus();
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
  galleryLastFocus = document.activeElement;
  activeGalleryIndex = index;
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
  activeGalleryIndex = (activeGalleryIndex + direction + total) % total;
  updateGalleryLightbox();
};

galleryTabs?.addEventListener("click", (event) => {
  const button = event.target instanceof Element ? event.target.closest("[data-gallery-year]") : null;
  if (!(button instanceof HTMLButtonElement)) return;
  renderGalleryAlbum(button.getAttribute("data-gallery-year") || "2024");
});

galleryClose?.addEventListener("click", closeGalleryLightbox);
galleryPrev?.addEventListener("click", () => moveGalleryLightbox(-1));
galleryNext?.addEventListener("click", () => moveGalleryLightbox(1));

galleryLightbox?.addEventListener("click", (event) => {
  if (event.target === galleryLightbox) {
    closeGalleryLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (!galleryLightbox?.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeGalleryLightbox();
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

renderGalleryAlbum("2024");

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
