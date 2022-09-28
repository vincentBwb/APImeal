
let fs = require('fs');

exports.loadJsonArray = function(file) { 
    let res;
    try {res = JSON.parse(fs.readFileSync(file));}
    catch (_err) {res = [];}
    return res;
}

exports.saveJsonArray = function(file, data) {
    let res;
    try {
        fs.writeFileSync(file, JSON.stringify(data));
        res = true;
    }
    catch (_err) {res = false;}
    return res;
}

exports.loadTextFile = function(file) { 
    let res;
    try {res = fs.readFileSync(file);}
    catch (_err) {res = "";}
    return res;
}
