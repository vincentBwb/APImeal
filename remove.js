
exports.process = function(req, res, mess) { 

    // let database = require("./database");

    res.writeHead(200,{"Content-Type": "text/plain"}).end("module.remove.process");

    // let saved = database.saveJsonArray("messages.json", mess);

    return mess
}
