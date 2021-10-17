export function postView(post){

    const {date, title, link, content} = post;

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