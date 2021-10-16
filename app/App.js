import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { PostCard } from "./components/postCard.js";
import { Posts } from "./components/Posts.js";

import API from "./helpers/api.js";
import { peticion } from "./helpers/peticion.js";

export function App(){

    const $root = document.getElementById("root");

    $root.appendChild(Header());


    $root.appendChild(Posts());

    peticion(API.POSTS_EMBED, function(json){

        console.log(json);

        const AUX = document.createDocumentFragment();

        json.forEach(post => {
            
            AUX.appendChild(PostCard(post));
        });

        document.getElementById("Loader").classList.toggle("hide", true);
        document.getElementById("Posts").appendChild(AUX);
    });

    $root.appendChild(Loader());

    console.log("Incio");
}