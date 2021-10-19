let corte = true;

export function Menu(){

    //Estilos
        if(corte){
            const styles = document.getElementById("Styles");

            styles.insertAdjacentText("beforeend", `
            
                /*----> Menu*/
                .Menu {
                    display: flex;
                    justify-content: space-around;
                    padding: 10px;
                    background-color: rgb(156, 156, 156);
                    user-select: none;
                }
                .Menu a {
                    text-decoration: none;
                }
                .Menu a:hover {
                    text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
                }
            `);

            corte = false;
        }

    //HTML    
        const menu = document.createElement("nav");

        menu.classList.add("Menu");

        menu.innerHTML = `
            <a href="#">Home</a>
            <a href="#/search">Buscar</a>
            <a href="#/contacto">Contacto</a>
            <a href="https://trovo.live/Domy014" target="_blank" rel="noopener">Domy014</a>
        `;

    return menu;
}