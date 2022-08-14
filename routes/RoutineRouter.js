const Router = require('express').Router()
const controller = require('../controllers/RoutineController')

Router.get('/', controller.getAllRoutines)
Router.post('/:song_id', controller.createNewRoutine)
Router.put('/:routine_id', controller.updateRoutine)
Router.delete( '/:routine_id', controller.deleteRoutine)

module.exports = Router