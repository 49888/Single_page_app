let corte = true;

export function Search(){

    //Estilos
        if(corte){
            const styles = document.getElementById("Styles");

            styles.insertAdjacentText("beforeend", `
            
                /*----> Search*/
                .Search {
                    text-align: center;
                    padding: 10px;
                    background-color: lightgray;
                    user-select: none;
                }
                .Search input {
                    padding: 5px;
                }
            `);

            corte = false;
        }


    //HTML
        const $form = document.createElement("form");

        $form.classList.add("Search");

        const input = document.createElement("input");
        input.type = "search";
        input.name = "search";
        input.id = "search";
        input.placeholder = "Buscar... UwU";
        input.autocomplete = "off";

        let search = localStorage.getItem("search");
        if(location.hash.includes("#/search") && search != null){

            input.value = search;
        } 

        $form.appendChild(input);


    //JS
        $form.addEventListener("submit", function(e){

            e.preventDefault();

            localStorage.setItem("search", $form.search.value);
            location.hash = `#/search?search=${$form.search.value}`;
        });

        input.addEventListener("search", function(e){

            if(!input.value) localStorage.removeItem("search");
        });

    return $form;
}