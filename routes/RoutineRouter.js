const Router = require('express').Router()
const controller = require('../controllers/RoutineController')

Router.get('/', controller.getAllRoutines)

module.exports = Router