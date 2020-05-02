const net = require('net')

function zeroFill(number) {
    if (number < 10) {
        return "0" + number;
    }
    else {
        return number;
    }
}

const server = net.createServer(function(socket) {
    let date = new Date()
    year = date.getFullYear();
    month = zeroFill(date.getMonth() + 1);
    day = zeroFill(date.getDate());
    hour = zeroFill(date.getHours());
    min = zeroFill(date.getMinutes());
    output = year + "-" + month + "-" + day + " " + hour + ":" + min + "\n"
    socket.end(output)
})
server.listen(process.argv[2])
