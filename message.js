
exports.process = function(request, response, messages) { 

    let statusCode = 404;  // Id not found by default
    let res = {};  // Empty Json by default
    let id = request.url.split('/')[2];  // Get asked id

    for(i = 0 ; i < messages.length ; i++) {
        if(messages[i].id === id){ 
            statusCode = 200;
            res = messages[i]; 
            break;
        }
    }

    response.writeHead(statusCode,{"Content-Type": "text/json"}).end(JSON.stringify(res));
}
