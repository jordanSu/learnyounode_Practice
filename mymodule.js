const fs = require('fs');
const path = require('path');

module.exports = function (dirName, extName, callback) {
    fs.readdir(dirName, function(err, fileList) {
        if (err) {
            callback(err);
        }
        else {
            ext = '.' + extName;
            files = [];
            fileList.forEach(function (fileName) {
                if (path.extname(fileName) == ext) {
                    files.push(fileName);
                }
            });
            callback(null, files);
        }
    });
}