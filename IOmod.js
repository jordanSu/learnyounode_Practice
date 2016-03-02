var fs = require('fs');
var path = require('path');

module.exports = function (dirName, extName, callback) {
    var fs = require('fs');
    var path = require('path');
    extName = '.' + extName;
    fs.readdir(dirName, function (err,list) {
        if (err) {
            callback(err, null)
        }
        else {
            files = []
            for (var x in list) {
                if (path.extname(list[x]) == extName)
                    files.push(list[x])
            }
            return callback(null, files)
        }
    });
}
