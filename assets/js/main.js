/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu Show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu Hide */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__img-2", 1.2, { opacity: 0, y: 200, delay: 0.1 });
gsap.from(".home__img-3", 1.2, { opacity: 0, y: 200, delay: 0.5 });
gsap.from(".home__data", 1.2, { opacity: 0, y: -60, delay: 1 });
gsap.from(".home__bird-1", 1.2, { opacity: 0, x: -80, delay: 1.1 });
gsap.from(".home__bird-2", 1.2, { opacity: 0, x: 80, delay: 1.2 });
gsap.from(".home__img-1", 1.2, { opacity: 0, y: 200, delay: 1.2 });
gsap.from(".home__img-4", 1.2, { opacity: 0, x: 200, delay: 1.3 });
