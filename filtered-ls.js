const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], callback);

function callback(err,list){
    const ext = '.' + process.argv[3];
    if (!err) {
        for (let i in list) {
            if (path.extname(list[i]) == ext)
                console.log(list[i]);
        }
    }
}
