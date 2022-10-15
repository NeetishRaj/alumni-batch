const http = require("http");
const handleGetRequest = require('./handleGetRequest');
const PORT = 3000

const requestListener = function (req, res) {
	console.log(req.method);

	// Segregate the requests

	if(req.method === "GET") {
		const data = handleGetRequest(req);
		res.writeHead(200);
		res.end(JSON.stringify(data));
	}

	/**
	 * If POST request, then
	 * 
	 * 1. Validate the data
	 * 2. Create a new unique id for this entry
	 * 3. We will store this new entry in DB
	 * 4. Send response with 201 status code.
	 */



	/**
	 * If GET request, then
	 * 
	 * 1. Get last 10 entries from DB, based on query
	 * 2. send this entries in the JSON response together with 200 status code.
	 * 
	 */

};

const server = http.createServer(requestListener);
server.listen(PORT);
