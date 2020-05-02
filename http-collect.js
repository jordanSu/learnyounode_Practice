const http = require('http')

http.get(process.argv[2], getResponse)

function getResponse(response) {
    var content = ""
    response.setEncoding("utf8")
    response.on("data", function(data) {
        content = content + data
    })
    response.on("end", function() {
        console.log(content.length)
        console.log(content)
    })
}
