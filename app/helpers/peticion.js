export async function peticion(url, result){

    await fetch(url)
    .then(function(res){

        return res.json();
    })
    .then(function(json){

        result(json);
    })
    .catch(function(error){

        console.log(error);
    });
}