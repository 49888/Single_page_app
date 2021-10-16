import API from "../helpers/api.js";

export function Title(){

    const $title = document.createElement("h1");

    $title.classList.add("Title");

    $title.innerHTML = `
        <a href="${API.WEB}" target="_blank" rel="noopener noreferrer">
            ${API.WEB}
        </a>
    `;

    return $title;
}