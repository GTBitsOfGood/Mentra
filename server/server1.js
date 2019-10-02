const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const crypto = require('crypto');
const UserInfo = require('./schema');
const api = express();

api.use(cors());
api.use(compression());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

/*api.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401).send('Missing authentication credentials.');
	}
});*/

api.listen(config.server.port, err => {
	if (err) {
		logger.error(err);
		process.exit(1);
	}

	require('./utils/db');

	fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
		require('./routes/' + file)(api);
	});

	logger.info(
		`API is now running on port ${config.server.port} in ${config.env} mode`
	);
});

module.exports = api;