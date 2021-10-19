import { Menu } from "./Menu.js";
import { Search } from "./Search.js";
import { Title } from "./Title.js";

let corte = true;

export function Header(){

    //Estilos
        if(corte){
            const styles = document.getElementById("Styles");

            styles.insertAdjacentText("beforeend", `
            
                /*----> Header*/
                .Header {
                    position: sticky;
                    top: 0;
                    z-index: 100;
                }
            `);

            corte = false;
        }

    //HTML    
        const header = document.createElement("header");

        header.classList.add("Header");

        header.appendChild(Title());

        header.appendChild(Menu());

        header.appendChild(Search());

    return header;
}