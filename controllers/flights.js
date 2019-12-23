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
    newDate = new Date
    Flight.findOne({_id: req.params.id}, (err, record, newDate) => {
        res.render('flights/show', {
            flight: record,
            date: newDate
        })
    })
}


module.exports = {
    new: newFlight,
    create,
    index,
    show
}