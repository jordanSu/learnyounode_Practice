var fs = require('fs');
var path = require('path');
var ext = '.' + process.argv[3];
fs.readdir(process.argv[2],callback);

function callback(err,list){
    if (!err) {
        for (var file in list) {
            if (path.extname(list[file]) == ext)
                console.log(list[file]);
        }
    }
}
