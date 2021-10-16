export function Search(){

    const form = document.createElement("form");

    form.classList.add("Search");

    const input = document.createElement("input");
    input.type = "search";
    input.name = "search";
    input.id = "search";
    input.placeholder = "Buscar... UwU";

    form.appendChild(input);

    return form;
}