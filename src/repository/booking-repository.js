const HttpStatus = require('http-status-codes');
const { Booking } = require('../models/index');
const { AppError, ValidationError } = require('../utils/errors/index');

class BookingRepository {
	async createBooking(data) {
		try {
			const booking = await Booking.create(data);
			return booking;
		} catch (error) {
			if (error.name === 'SequelizeValidationError') {
				throw new ValidationError();
			}

			throw new AppError(
				'Repository Error',
				'Cannot create the Booking..!',
				'There are some issure creating the booking, Please try again later..!',
				HttpStatus.INTERNAL_SERVER_ERROR
			);
		}
	}
}

module.exports = BookingRepository;
