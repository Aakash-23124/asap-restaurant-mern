const mongoose = require('mongoose');

const TableBookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    date: String,
    time: String,
    guests: Number
});

module.exports = mongoose.model('TableBooking', TableBookingSchema);
