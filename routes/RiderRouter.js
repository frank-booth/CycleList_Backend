const Router = require('express').Router()
const controller = require('../controllers/RiderController')

Router.get('/', controller.getAllRiders)
Router.get('/:rider_id', controller.getRiderById)
Router.post('/', controller.createNewRider)
Router.put('/:rider_id', controller.updateRider)

module.exports = Router
