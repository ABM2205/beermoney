let createUsers = require('./createUsers.js');
let createBooks = require('./createBooks.js');
let genTransactions = require('./generateTransactions.js')
var request = require("request");
var rp = require('request-promise');
// create the database




        request({
            method: 'PUT',
            url: 'http://localhost:8080/db/users',
            headers:
            {
                'postman-token': '670234a2-01fd-15b6-960b-647af64faa20',
                'cache-control': 'no-cache',
                authorization: 'Basic YWRtaW46Y2hhbmdlaXQ=',
                'content-type': 'application/json'
            }
        },
            function (error, response, body) { if (error) throw new Error(error);  }
        );

        request({
            method: 'PUT',
            url: 'http://localhost:8080/db/books',
            headers:
            {
                'postman-token': '670234a2-01fd-15b6-960b-647af64faa20',
                'cache-control': 'no-cache',
                authorization: 'Basic YWRtaW46Y2hhbmdlaXQ=',
                'content-type': 'application/json'
            }
        }, function (error, response, body) {
            if (error) throw new Error(error);
        });
        // create the Transactions
        request({
            method: 'PUT',
            url: 'http://localhost:8080/db/transactions',
            headers:
            {
                'postman-token': '670234a2-01fd-15b6-960b-647af64faa20',
                'cache-control': 'no-cache',
                authorization: 'Basic YWRtaW46Y2hhbmdlaXQ=',
                'content-type': 'application/json'
            }
        }, function (error, response, body) {
            if (error) throw new Error(error);
        });

/*
{
    "Seller" -> uid key for seller user
    "Books"
    [
        {
            "ISBN"
            "BookState" -> quality from book qualities enumeration
            "Price" -> float val representing USD 
        }
    ]
    "Sold" -> t/f
    "BuyerId"
    "FlaggedForReversal" 
}
*/
