const http = require('http')
const url = require('url')

const server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    let parseURL = url.parse(request.url, true);
    let api = parseURL.pathname;
    let time = parseURL.query['iso'];
    if (api == "/api/parsetime") {
        let timeObj = new Date(time);
        let data = {
            "hour": timeObj.getHours(),
            "minute": timeObj.getMinutes(),
            "second": timeObj.getSeconds()
        };
        response.end(JSON.stringify(data));
    }
    else if (api == "/api/unixtime") {
        let parseTime = Date.parse(time);
        let data = { "unixtime": parseTime };
        response.end(JSON.stringify(data));
    }
});
server.listen(process.argv[2])
