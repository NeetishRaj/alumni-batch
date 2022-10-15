const db = require('./db')
const url = require('url');
const { data } = require('./db');

const handleGetRequest = (req) => {
    // based on query fetch the data from DB
    let result = db.data;


    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.query);

    if(parsedUrl.query.city) {
        result = db.data.filter(item => item.city.toLowerCase() === parsedUrl.query.city.toLowerCase());
    }

    return result;
}


module.exports = handleGetRequest;