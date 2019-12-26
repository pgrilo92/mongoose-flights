const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

const newTicket = (req, res) =>  {
    res.render('tickets/new', {flight: req.params.id})
}

const create = (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    Ticket.create(req.body, function(err, ticket) {
        if(err) return res.render('tickets/new')
        ticket.flight = req.params.id
        Flight.findById(req.params.id, function(err, flight) {
            if(err) return res.render('tickets/new')
            flight.tickets.push(ticket._id)
            flight.save(function() {
                res.redirect(`/flights/${flight._id}`)
            })
        })
    })
}

module.exports = {
    new: newTicket,
    create
}