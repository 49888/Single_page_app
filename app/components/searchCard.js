let corte = true;

export function searchCard(post){

    const {id, title, slug} = post._embedded.self[0];

    //Estilos
        if(corte){
            const styles = document.getElementById("Styles");

            styles.insertAdjacentText("beforeend", `
            
                /*---->  Search card*/
                .Search-post {
                    padding: 10px;
                    background-color: rgb(168, 168, 168);
                    margin: 10px 0px;
                }
            `);

            corte = false;
        }

    //HTML
        const $post = document.createElement("article");

        $post.classList.add("Search-post");

        $post.innerHTML = `
            <h4>${title.rendered}</h4>
            <a href="#/${slug}" data-id="${id}">Ver publicacion</a>
        `;

    //JS    
        $post.querySelector("a").addEventListener("click", function(e){

            localStorage.setItem("wp:id", e.target.getAttribute("data-id"));

            console.log("😂");
        });

    return $post;
}