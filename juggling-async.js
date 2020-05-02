const http = require('http');

const results = ["", "", ""];
let counter = 0;

function httpGet (index) {
    http.get(process.argv[2 + index], function(response) {
        response.setEncoding("utf8");
        response
            .on("data", function (data) {results[index] += data})
            .on("end", printAll);
    });
}

function printAll() {
    counter += 1;
    if (counter == 3) {
        for (let i = 0; i < 3; i++) {
            console.log(results[i]);
        }
    }
}

for (let i = 0; i < 3; i++) {
    httpGet(i);
}
    