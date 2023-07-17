const HttpStatus = require('http-status-codes');

class ServiceError extends Error {
	constructor(
		message = 'Something went wrong..!',
		description = 'Server layer error.',
		statusCode = HttpStatus.INTERNAL_SERVER_ERROR
	) {
		super();
		this.name = 'Service Error';
		this.message = message;
		this.description = description;
		this.statusCode = statusCode;
	}
}

module.exports = ServiceError;
