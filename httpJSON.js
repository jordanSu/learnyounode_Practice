var http = require('http')
var url = require('url')
var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type':'application/json'})
    var parseURL = url.parse(request.url, true)
    if (parseURL.pathname == "/api/parsetime") {
        var requestTime = parseURL.query['iso']
        var parseTime = new Date(requestTime)
        var data = {
            "hour": parseTime.getHours(),
            "minute": parseTime.getMinutes(),
            "second": parseTime.getSeconds()
        }
        response.end(JSON.stringify(data))
    }
    else if (parseURL.pathname == "/api/unixtime") {
        var requestTime = parseURL.query['iso']
        var time = Date.parse(requestTime)
        var data = { "unixtime": time }
        response.end(JSON.stringify(data))
    }
})
server.listen(process.argv[2])
