const express = require('express');

function createAnsRunServer() {
	const app = express();

	app.listen(3002, (req, res) => {
		console.log('Server is running on the port : 3002');
	});
}

createAnsRunServer();
