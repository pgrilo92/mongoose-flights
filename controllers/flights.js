const Flight = require('../models/flight')

const newFlight = (req, res) => {
    res.render('flights/new', {
        date: new Date()

    })
}

const create = (req,res) => {
    let flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) return res.render('flights/new')
        res.redirect('/flights')
    })
}

const index = (req, res) => {
    Flight.find({}, function (err, records) {
        res.render('flights/index', {
            flights: records
        })
    })
}

const show = (req, res) => {
    Flight.findOne({}, (err, records) => {
        res.render('flights/show', {

        })
    })
}


module.exports = {
    new: newFlight,
    create,
    index,
    show
}