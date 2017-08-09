var request = require("request");
var random_name = require('node-random-name');

const books = [
    { 
        Name: 'Information Technology Personality Mapping and you',
        ISBN10:'0198572220'
    },
    {
        Name: 'The science of scientific deep learning',
        ISBN10: '188652923X'
    },
        {
        Name: 'Lorentz systems and household dust modeling',
        ISBN10:'0980232775'
    },
        {
        Name: 'Binary Search Trees: the exhaustive reference',
        ISBN10: '1466575573'
    },
        {
        Name: 'Socks and cybernetic systems: measuring human response one foot at a time',
        ISBN10: '1439840954'
    },
        {
        Name: 'Linked Lists, pointers and the human will to live',
        ISBN10: '0081008775'
    },
        {
        Name: 'Neural nets in the modern office',
        ISBN10:'019021189X'
    },
        {
        Name: 'Textbooks for beginners',
        ISBN10: '0131458353'
    },
        {
        Name: 'Generating Random ISBNs',
        ISBN10:'3243812397'
    },
        {
        Name: 'Modeling Inter-Campus economic systems',
        ISBN10:'2453214522'
    },
]
let getRand = () => majorlist[Math.floor(Math.random() * majorlist.length)];

var options = {};

var numbooks = 10;


    books.forEach((val) => {
        options = {
            method: 'POST',
            url: 'http://localhost:8080/db/books',
            headers:
            {
                'cache-control': 'no-cache',
                authorization: 'Basic YWRtaW46Y2hhbmdlaXQ=',
                'content-type': 'application/json'
            },
            body:val,
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            //console.log(body);
        });
    });

