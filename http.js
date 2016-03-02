var http = require('http')
http.get(process.argv[2], getResponse)

function getResponse(response) {
    response.setEncoding("utf8")
    response.on("data", function(data) {
        console.log(data)
    })
}
