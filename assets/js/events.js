import { copyUrl } from "./copy.js";
import { toggleNavbarClasses } from "./menu.js";
import { urlShorten, urlValidity } from "./url-shorten.js";

export const events = () => {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.id === "menu-icon") {
      toggleNavbarClasses();
    }
    if (e.target.className === "copy-url-button") {
      copyUrl(e.target.dataset.index);
    }
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.id === "urlString") {
      urlValidity(e.target);
    }
  });

  d.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(await urlShorten(e.target.urlString.value));
  });

  d.addEventListener("copy", (e) => {
    
  });
};
