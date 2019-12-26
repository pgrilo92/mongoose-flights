const Flight = require('../models/flight')
const Ticket = require('../models/ticket')


const newFlight = (req, res) => {
    res.render('flights/new', {
        date: new Date()

    })
}

const create = (req,res) => {
    let flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) return res.render('flights/new')
        res.redirect('/')
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
    Flight.findOne({_id: req.params.id}, (err, flight, newDate) => {
        Ticket.find({flight: flight._id}, (err, tickets) => {
            console.log(tickets)
        res.render('flights/show', {
            flight,
            date: newDate,
            tickets
            })
        })
    })
}


module.exports = {
    new: newFlight,
    create,
    index,
    show
}