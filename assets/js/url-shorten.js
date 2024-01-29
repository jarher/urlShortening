let indexUrl = 0;

const urlError = document.querySelector(".url-error");

const shortenUrlTemplate = (originalUrl, shorten, index) => {
  const template = `
    <div>
        <span class="original-url">${originalUrl}</span>
    </div>
    <div>
        <span class="shorten-url" data-index=${index}>${shorten}</span>
        <button class="copy-url-button" data-index=${index}>copy</button>
    </div>
    `;
  const shortenUrlSection = document.querySelector(".shorten-url-section");
  const urlShortenContent = document.createElement("div");
  urlShortenContent.className = "url-shorten-content";
  urlShortenContent.innerHTML = template;

  shortenUrlSection.append(urlShortenContent);
};

const getUrlShorten = async (url) => {
  try {
    const urlString =
      "https://www.shareaholic.com/v2/share/shorten_link?apikey=ad3dc47e0e903255085a19092674f2b1&url=" +
      url +
      "&service[name]=shrlc";
    const res = await fetch(urlString, { method: "GET", cors: "cors" });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
export const urlValidity = (target) => {
  if (target.validity.valid) {
    urlError.classList.remove("show-error");
  } else {
    urlError.classList.add("show-error");
  }
};
export const urlShorten = async (originalUrl) => {
  const res = await getUrlShorten(originalUrl);
  const shortenUrl = res.data;
  shortenUrlTemplate(originalUrl, shortenUrl, indexUrl);
  indexUrl++;
};