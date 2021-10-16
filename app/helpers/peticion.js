export function peticion(url, result){

    fetch(url)
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