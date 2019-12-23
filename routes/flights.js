var express = require('express')
var router = express.Router()
const flightsCtrl = require('../controllers/flights')
const ticketsCtrl = require('../controller/tickets')

router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.get('/', flightsCtrl.index)
router.get('/:id', flightsCtrl.show)
router.get('/:id/tickets/new', ticketsCtrl.newTicket)

module.exports = router