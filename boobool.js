var url = require ("url");
let database = require("./database");
exports.process = function process (request, response, messages) {
    
    // on prend l'url et on recupere l'id qui est a l'interieur
    urlId = request.url;
    cc=urlId.split('/');
    d=cc[2];

    
// on n'a mis la methode PUT en option si besoin en commentaire

////// if (req.method == "PUT") {
           
//on trouve dans le dossier messages.json le message qui correspond a l'id rentrer dans l'url
    found = messages.find(element => element.id === d);

// si on trouve l'id on retourne le message a "true" s'il est "false" et inversement
        if (found !== undefined) {
            
            if (found.lu == true) {
            
                found.lu = false;
              console.log("ok1")
               
            } else {
            
                found.lu = true;
                console.log("ok2")
            
            }

// envoie le message d'erreur s'il ne trouve aucun id qui correspond dans la "database"
        }else{
            response.writeHead(404,{'Content-Type':'text/html'}).end("boobool.process");
            console.log("pas ok")
            return messages;
            
        }
    // } 
    response.writeHead(204,{"Content-Type":"text/plain"},).end("boobool.process");
    let saved = database.saveJsonArray("messages.json", messages);
    return messages;

  
}