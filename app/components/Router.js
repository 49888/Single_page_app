import API from "../helpers/api.js";
import { PostCard } from "./postCard.js";

import {peticion} from "../helpers/peticion.js";
import { postView } from "./postView.js";

export async function Router(hash){

    const $main = document.getElementById("Main");
    $main.innerHTML = "";

    const $loader = document.getElementById("Loader");
    $loader.classList.toggle("hide", false);


    console.log(hash);
    switch(true){

        case !hash || hash == "#/": console.log("Home");

            await peticion(API.POSTS_EMBED, function(json){

                console.log(json);
        
                const AUX = document.createDocumentFragment();
        
                json.forEach(post => AUX.appendChild(PostCard(post)));
        
                $main.appendChild(AUX);
            });

            break;

        case hash.includes("#/search"):
            console.log("Busqueda");
            break;
            
        case hash == "#/contacto":
            console.log("Contacto");
            break;
            
        default:
            console.log("Pelicula");
            const id = localStorage.getItem("wp:id");
            
            await peticion(`${API.POSTS}/${id}`, function(json){

                console.log(json);

                $main.appendChild(postView(json));
            });
    }
    

    $loader.classList.toggle("hide", true);
}