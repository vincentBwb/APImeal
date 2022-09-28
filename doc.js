exports.process = function (request, response) {

    const fs = require("fs");

      fs.readFile("doc.txt", function (err, data) {
        if (err) {console.log(err);}

        response.write(data);
        response.end();
      });


};
