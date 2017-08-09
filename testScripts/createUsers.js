var request = require("request");
var random_name = require('node-random-name');

const majorlist = [
    'Information Technology',
    'Computer Science',
    'Software Engineering',
    'Math'
]
let getRand = () => majorlist[Math.floor(Math.random() * majorlist.length)];

var options = {};

var numusers = 10;



    for (var i = 0; i < numusers; i++) {
        options = {
            method: 'POST',
            url: 'http://localhost:8080/db/users',
            headers:
            {
                'cache-control': 'no-cache',
                authorization: 'Basic YWRtaW46Y2hhbmdlaXQ=',
                'content-type': 'application/json'
            },
            body: {
                Name: random_name(),
                School: "George Mason",
                Zip: "22030",
                Major: getRand()
            },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            //console.log(body);
        });
    }




