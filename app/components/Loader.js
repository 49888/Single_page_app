
export function Loader(){

    const $loader = document.createElement("div");

    $loader.id = "Loader";
    $loader.classList.add("Loader");

    $loader.innerHTML = `
        <img src="app/assets/line_3.svg" alt="Cargando..." title="Cargando...">
    `;

    return $loader;
}