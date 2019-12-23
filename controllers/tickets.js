const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket,
    index
}

const newTicket = (req, res) =>  {
    res.render('/tickets/new')
}

const create = (req, res) => {
    let ticket = new Ticket(req.body)
    ticket.save(function (err) {
        if(err) return res.render('tickets/new')
        res.redirect(`/flights/${flightId}/`)
    })
}