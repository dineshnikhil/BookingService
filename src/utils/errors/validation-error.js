const HttpStatus = require('http-status-codes');

class ValidationError extends Error {
	constructor(error) {
		super();

		let explanation = [];
		error.errors.forEach((err) => {
			explanation.push(err);
		});

		this.name = 'Validation Error';
		this.message = 'Not able to validate the data send in the request';
		this.explanation = this.explanation;
		this.statusCode = HttpStatus.BAD_REQUEST;
	}
}

module.exports = ValidationError;
