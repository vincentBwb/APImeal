
// Libraries requires
let http = require("http");

// Modules requires
let database = require("./database");
let doc = require("./doc");
let list = require("./list");
let create = require("./create");
let remove = require("./remove");
let message = require("./message");
let boobool = require("./boobool");

// listen port
const myPort = 8080;

// Loading 'messages.json' - Return empty array if file read error
let messages = database.loadJsonArray("messages.json");

http.createServer(function(request, response) {

    if(request.url === '/') {

        // Return doc
        doc.process(request, response);

    } else {
        let command = request.url.split('/')[1];

        if(command === 'list') {
            // Return messages id list
            list.process(request, response, messages);

        } else if(command === "create") {
            // Create message (POST method)
            messages = create.process(request, response, messages);

        } else if(command === "remove") {
            // Remove id message
            messages = remove.process(request, response, messages);

        } else if(command === "message") {
            // Return id message json
            message.process(request, response, messages);

        } else if(command === "boobool") {
            // Toggle message read status
            messages = boobool.process(request, response, messages);

        } else {
            // Default response if command unknown
            response.writeHead(404,{"Content-Type": "text/plain"}).end(`Error: 404 Command unknown`);
        }
    }

}).listen(myPort);

console.log(`Server launched on: http://localhost:${myPort}/`);
