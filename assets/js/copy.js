export const copyUrl = (target, index) => {
  const shorten_url_arrays = Array.from(
    document.querySelectorAll(".shorten-url")
  );

  const shorten_url = shorten_url_arrays.filter(
    (element) => element.dataset.index === index
  );
  navigator.clipboard.writeText(shorten_url[0].innerText);
  target.classList.remove("copy-url-button");
  target.classList.add("copied-url-button");
  target.innerText = "Copied!";
};
