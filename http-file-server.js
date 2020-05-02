const http = require('http')
const fs = require('fs')

var server = http.createServer((request, response) => {
    var fileStream = fs.createReadStream(process.argv[3])
    fileStream.pipe(response)
})
server.listen(process.argv[2])
