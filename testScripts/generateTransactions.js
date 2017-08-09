var request = require("request");
var rp = require('request-promise');


    rp(
    {
        method: 'GET',
        url: 'http://localhost:8080/db/books',
        headers:
        {
            'cache-control': 'no-cache',
            authorization: 'Basic YWRtaW46Y2hhbmdlaXQ=',
            'content-type': 'application/json'
        }
    },
    function (error, response, body) {
        if (error) throw new Error(error);
        return body;
    }
).then((books) => {

    request({
        method: 'GET',
        url: 'http://localhost:8080/db/users',
        headers:
        {
            'postman-token': '670234a2-01fd-15b6-960b-647af64faa20',
            'cache-control': 'no-cache',
            authorization: 'Basic YWRtaW46Y2hhbmdlaXQ=',
            'content-type': 'application/json'
        }
    },
        function (error, response, body) {
            if (error) throw new Error(error);


            for (var i = 0; i < 2; i++) {

                var book = books[Math.floor(Math.random() * books.length)];
                console.log(body);
                var user1 = body[0 + i]._embedded;

                var user2 = body[1 + i]._embedded;
                options = {
                    method: 'POST',
                    url: 'http://localhost:8080/db/transactions',
                    headers:
                    {
                        'cache-control': 'no-cache',
                        authorization: 'Basic YWRtaW46Y2hhbmdlaXQ=',
                        'content-type': 'application/json'
                    },
                    body: {
                        Seller: user1,
                        Books: [
                            {
                                Book: book,
                                State: 'good',
                                Price: '20.00',
                            }
                        ],
                        Sold: false,
                        Buyer: user2,
                        Flagged: false
                    },
                    json: true
                };

                request(options, function (error, response, body) {
                    if (error) throw new Error(error);

                });
            } // end for loop
        }
    );

})
