import API from "../helpers/api.js";

let corte = true;

export function Title(){

    //Estilos
    if(corte){
        const styles = document.getElementById("Styles");

        styles.insertAdjacentText("beforeend", `
        
            /*----> Title */
            .Title {
                text-align: center;
                padding: 10px;
                background-color: gray;
                user-select: none;
            }
        
            .Title a {
                color: black;
                text-decoration: none;
            }
            .Title a:visited {
                color: black;
            }
            .Title a:hover {
                text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
            }
        `);

        corte = false;
    }

    //HTML
        const $title = document.createElement("h1");

        $title.classList.add("Title");

        $title.innerHTML = `
            <a href="${API.WEB}" target="_blank" rel="noopener noreferrer">
                ${API.WEB}
            </a>
        `;

    return $title;
}