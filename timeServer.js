var net = require('net')
var server = net.createServer(function(socket) {
    var date = new Date()
    year = date.getFullYear()
    month = date.getMonth() + 1
    if (month < 10) month = "0" + month
    day = date.getDate()
    if (day < 10) day = "0" + day
    hour = date.getHours()
    min = date.getMinutes()
    output = year + "-" + month + "-" + day + " " + hour + ":" + min + "\n"
    socket.end(output)
})
server.listen(process.argv[2])
