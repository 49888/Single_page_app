let corte = true;

export function PostCard(post){

    const {id, title, date, slug, _embedded} = post;

    //Estilos
        if(corte){
            const styles = document.getElementById("Styles");

            styles.insertAdjacentText("beforeend", `
            
                /*----> Post-card*/
                .Post-card {
                    width: 80%;
                    padding: 5px 10px;   margin: 10px;
                    background-color: lightskyblue;
                    border-radius: 10px;
                    display: flex;    flex-direction: column;
                    justify-content: center;    align-items: center;
                }
                .Post-card > * {
                    margin: 5px 0;
                }
                .Post-card img {
                    width: 50%;   height: 50%;
                    object-fit: scale-down;
                }
                .Post-card p {
                    width: 100%;
                    display: flex;  justify-content: space-between;
                }
            `);

            corte = false;
        }

    //HTML
        let img = "";

        if(_embedded["wp:featuredmedia"]) img = _embedded["wp:featuredmedia"][0].source_url;
        else img = "http://placeimg.com/200/200/arch";
        

        const $post = document.createElement("article");

        $post.classList.add("Post-card");

        $post.innerHTML = `
            <img src="${img}" alt="">
            <h4>${title.rendered}</h4>
            <p>
                <time datetime="${date}">${(new Date(date)).toLocaleString()}</time>
                <a href="#/${slug}" data-id="${id}">Ver publicacion</a>
            </p>
        `;

    //JS
        $post.querySelector("p a").addEventListener("click", function(e){

            localStorage.setItem("wp:id", e.target.getAttribute("data-id"));
        });

    return $post
}