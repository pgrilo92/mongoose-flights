const express = require('express')
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets')

module.exports = {
    router
}

router.get('../tickets/new', ticketsCtrl.new)
router.post('../tickets', ticketsCtrl.create)
router.post('../movies/:movieId/tickets/', ticketsCtrl.addToFlight)
