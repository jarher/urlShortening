const d = document;

const mainNavbar = d.querySelector(".main-navbar");

const navbarIn = () => {
  mainNavbar.classList.remove("navbar-collapse");
  setTimeout(() => mainNavbar.classList.add("rotateIn-navbar"), 200);
};

const navbarOut = () => {
  mainNavbar.classList.remove("rotateIn-navbar");
  setTimeout(() => mainNavbar.classList.add("navbar-collapse"), 300);
};

export const toggleNavbarClasses = () => mainNavbar.classList.contains("rotateIn-navbar") ? navbarOut() : navbarIn();

