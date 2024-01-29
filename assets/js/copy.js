export const copyUrl = (index) => {
  const shorten_url_arrays = Array.from(
    document.querySelectorAll(".shorten-url")
  );

  const shorten_url = shorten_url_arrays.filter(
    (shorten_url) => shorten_url.dataset.index === index
  );

  const source = document.querySelector("div.source");

  source.addEventListener("copy", (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData(
      "text/plain",
      selection.toString().toUpperCase()
    );
    event.preventDefault();
  });
};
