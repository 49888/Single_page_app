import { Menu } from "./Menu.js";
import { Search } from "./Search.js";
import { Title } from "./Title.js";


export function Header(){

    const header = document.createElement("header");

    header.classList.add("Header");

    header.appendChild(Title());

    header.appendChild(Menu());

    header.appendChild(Search());

    return header;
}