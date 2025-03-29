const express = require('express');
const router = express.Router();
const TableBooking = require('../models/TableBooking');

router.post('/', (req, res) => {
    const newBooking = new TableBooking(req.body);
    newBooking.save()
        .then(() => res.json('Table booked!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
