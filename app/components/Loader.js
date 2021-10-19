let corte = true;

export function Loader(){

    //Estilos
        if(corte){
            const styles = document.getElementById("Styles");

            styles.insertAdjacentText("beforeend", `
            
                /*----> Loader*/
                .Loader {
                    width: 100px;   height: 100px;
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    margin: auto;
                }
                .Loader img {
                    width: 100%;    height: 100%;
                }
            `);

            corte = false;
        }

    //HTML    
        const $loader = document.createElement("div");

        $loader.id = "Loader";
        $loader.classList.add("Loader");

        $loader.innerHTML = `
            <img src="app/assets/line_3.svg" alt="Cargando..." title="Cargando...">
        `;

    return $loader;
}