const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

const newTicket = (req, res) =>  {
    res.render('tickets/new', {flight: req.params.id})
}

const create = (req, res) => {
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

const deleteTicket = (req, res) => {
    let ticketId = req.params.ticketId
    let flightId = req.params.flightId
    Ticket.deleteOne({_id: ticketId}, () => {
        res.redirect(`/flights/${flightId}`)     
    })
}

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket
}