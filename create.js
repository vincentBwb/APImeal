exports.process = function(request, response, mess) {

    let database = require("./database");
    var querystring = require('querystring');

    
    if (request.method === "POST") {
        
        var m = new Date();
        // faire plaisir à Seb avec une jolie date
        var dateString = m.getUTCFullYear() + "-" +
        ("0" + (m.getUTCMonth()+1)).slice(-2) + "-" +
        ("0" + m.getUTCDate()).slice(-2) + " " +
        ("0" + m.getHours()).slice(-2) + ":" +
        ("0" + m.getUTCMinutes()).slice(-2) + ":" +
        ("0" + m.getUTCSeconds()).slice(-2);

        var newMessage = '';

        request.on('data', function(data) {
            // data += `&id=${mess.length}&date=${dateString}&etat=Envoyé`
            newMessage = data;
            console.log(newMessage);

            // si trop long
            if (newMessage.length > 1e6) {
                newMessage = "";
                response.writeHead(413, {'Content-Type': 'text/plain'}).end();
                request.connection.destroy();
            }
        });

        request.on('end', function() {
            console.log(typeof(newMessage));
            var newMessageParsed = JSON.parse(newMessage);
            newMessageParsed.id = mess.length;
            newMessageParsed.date = dateString;
            newMessageParsed.etat = "Envoyé";
            newMessageParsed.lu = false;
            mess.push(newMessageParsed)
            response.writeHead(200,{"Content-Type": "text/plain; charset=utf-8"});
            //response.write("Message envoyé")
            database.saveJsonArray("messages.json", mess);
            response.end()
        })
        return mess;
    }
}


// curl -d "exped=Loic&dest=Pierre&sujet=test&message=Ou sont les cles de la cave?&lu=true&joint=xxx.png" -X POST http://localhost:8080/create