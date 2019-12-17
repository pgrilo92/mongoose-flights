const Flight = require('../models/flight')

const newFlight = (req, res) => {
    res.render('flights/new')
}

const create = (req,res) => {
    // req.body.flightDate
    // req.body.flightNo
    // req.body.airline
    let flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) return res.render('flights/new')
        console.log(flight)
        res.redirect('/flights/new')
    })
}

const index = (req, res) => {
    Flight.find({}, function (err, records) {
        res.render('flights/index', {
            flights: records
        })
    })
}


module.exports = {
    new: newFlight,
    create,
    index
}