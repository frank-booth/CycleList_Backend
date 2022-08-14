const Router = require('express').Router()
const controller = require('../controllers/RoutineController')

Router.get('/', controller.getAllRoutines)
Router.post('/:song_id', controller.createNewRoutine)

module.exports = Router