export function Menu(){

    const menu = document.createElement("nav");

    menu.classList.add("Menu");

    menu.innerHTML = `
        <a href="#">Home</a>
        <a href="#/search">Buscar</a>
        <a href="https://trovo.live/Domy014" target="_blank" rel="noopener">Domy014</a>
    `;

    return menu;
}