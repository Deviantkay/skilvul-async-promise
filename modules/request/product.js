export function getProduct() {
  const result = document.querySelector("#xhr-2-result");

  document.querySelector("#xhr-2").addEventListener("click", () => {
    result.textContent = "";

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("loadend", () => {
      let responseText = xhr.responseText;
      let responseJSON = JSON.parse(responseText);
      let addedHTML = "";

      for (let i = 0; i < responseJSON.length; i++) {
        addedHTML = addedHTML + `<li>${responseJSON[i].name}</li>`;
      }

      result.innerHTML = `<ul>${addedHTML}</ul>`;
    });

    xhr.open(
      "GET",
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    xhr.send();
    result.textContent = `${result.textContent}Started XHR request\n`;
  });

  document.querySelector("#reload-2").addEventListener("click", () => {
    result.textContent = "";
    document.location.reload();
  });
}

export function ascending() {
  const result = document.querySelector("#xhr-2-result");

  document.querySelector("#asc").addEventListener("click", () => {
    result.textContent = "";

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("loadend", () => {
      let responseText = xhr.responseText;
      let responseJSON = JSON.parse(responseText);
      let addedHTML = "";
      let resp = [];

      for (let i = 0; i < responseJSON.length; i++) {
        resp.push(responseJSON[i].name);
      }

      resp.sort();

      for (let i = 0; i < resp.length; i++) {
        addedHTML = addedHTML + `<li>${resp[i]}</li>`;
      }

      result.innerHTML = `<ul>${addedHTML}</ul>`;
    });

    xhr.open(
      "GET",
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    xhr.send();
    result.textContent = `${result.textContent}Started XHR request\n`;
  });
}

export function descending() {
  const result = document.querySelector("#xhr-2-result");

  document.querySelector("#desc").addEventListener("click", () => {
    result.textContent = "";

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("loadend", () => {
      let responseText = xhr.responseText;
      let responseJSON = JSON.parse(responseText);
      let addedHTML = "";
      let resp = [];

      for (let i = 0; i < responseJSON.length; i++) {
        resp.push(responseJSON[i].name);
      }

      resp.sort().reverse();

      for (let i = 0; i < resp.length; i++) {
        addedHTML = addedHTML + `<li>${resp[i]}</li>`;
      }

      result.innerHTML = `<ul>${addedHTML}</ul>`;
    });

    xhr.open(
      "GET",
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    xhr.send();
    result.textContent = `${result.textContent}Started XHR request\n`;
  });
}
