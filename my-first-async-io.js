const fs = require('fs');
fs.readFile(process.argv[2],callback);

function callback(err,data){
    let str = data.toString();
    console.log(str.split("\n").length - 1);
}
