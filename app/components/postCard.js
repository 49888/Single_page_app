export function PostCard(post){

    const {id, title, date, slug, _embedded} = post;

    let img = "";

    if(_embedded["wp:featuredmedia"]) img = _embedded["wp:featuredmedia"][0].source_url;
    else img = "http://placeimg.com/200/200/arch";
    


    document.addEventListener("click", function(e){

        e.stopImmediatePropagation();     

        if(!e.target.matches(".Post a")) return;

        localStorage.setItem("wp:id", e.target.getAttribute("data-id")); 
    });



    const $post = document.createElement("article");

    $post.classList.add("Post");

    

    $post.innerHTML = `
        <img src="${img}" alt="">
        <h4>${title.rendered}</h4>
        <p>
            <time datetime="${date}">${(new Date(date)).toLocaleString()}</time>
            <a href="#/${slug}" data-id="${id}">Ver publicacion</a>
        </p>
    `;

    return $post
}