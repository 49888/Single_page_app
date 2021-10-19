let corte = true;

export function postView(post){

    const {date, title, link, content} = post;

    //Estilos 
    if(corte){
        const styles = document.getElementById("Styles");

        styles.insertAdjacentText("beforeend", `
        
            /*----> Post-view*/
            .Post-view {
                text-align: center;
                padding: 10px;
            }
            .Post-view > * {
                margin: 10px;
            }
            .Post-view div h2 {
                margin: 20px;
            }
            .Post-view div p {
                display: flex;
                justify-content: space-between;
            }
            .Post-view article p {
                text-align: left;
                margin: 10px;
            }
            .Post-view article img {
                width: auto;
                height: 300px;
                object-fit: cover;
            }
        `);

        corte = false;
    }

    //HTML
        const $post = document.createElement("section");

        $post.classList.add("Post-view");

        $post.innerHTML = `
            <div>
                <h2>${title.rendered}</h2>
                <p>
                    <time datetime="${date}">${new Date(date).toLocaleString()}</time>
                    <a href="${link}" target="_blank" rel="noopener noreferrer">Ver publicacion original</a>
                </p>   
            </div>
            <hr>
            <article>
                ${content.rendered}
            </article>
        `;

    return $post;
}