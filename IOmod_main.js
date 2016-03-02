var IOmod = require('./IOmod');
var path = require('path');
var extName = process.argv[3]
IOmod(process.argv[2],process.argv[3], printIt);

function printIt(err, files) {
    for (var i in files) {
        console.log(files[i])
    }
}
