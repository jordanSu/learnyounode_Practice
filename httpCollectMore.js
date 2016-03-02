var http = require('http')
var URLs = [process.argv[2], process.argv[3], process.argv[4]]
var content = ""
doThis(0)

function doThis(n) {
    if (n < 3) {
        http.get(URLs[n], function(response) {
            response.setEncoding("utf8")
            response.on("data", function(data) {
                content = content + data
            })
            response.on("end", function() {
                console.log(content)
                content = ""
                doThis(n+1)
            })
        })
    }
}
