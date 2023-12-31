const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const db = require('./models/index');
const apiRoutes = require('./routes/index');

function createAnsRunServer() {
	const app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use('/api', apiRoutes);

	app.listen(PORT, (req, res) => {
		console.log('Server is running on the port :', PORT);

		if (false) {
			db.sequelize.sync({ alert: true });
		}
	});
}

createAnsRunServer();
